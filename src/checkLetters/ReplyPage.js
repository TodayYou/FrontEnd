import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './checkLetters.css';
import Header from '../component/header';
import todayYouAxios from '../apis/axios';

const ReplyPage = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);
  const [author, setAuthor] = useState(''); // 보내는 사람 이름을 직접 입력하도록 변경
  const [replyTitle, setReplyTitle] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await todayYouAxios.get(`/api/letters/${id}`);
        setLetter(response.data);
      } catch (error) {
        console.error('Error fetching letter:', error);
      }
    };

    fetchLetter();
  }, [id]);

  const handleTitleChange = (e) => {
    setReplyTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const senderId = localStorage.getItem('userId'); // 자동으로 설정
      const recipientId = letter.senderId;
      const recipientName = letter.author;
      const sentDate = new Date().toISOString();

      const response = await todayYouAxios.post('/api/letters', {
        title: replyTitle,
        content: replyContent,
        author: author, // 보내는 사람 이름은 입력된 값 사용
        senderId: senderId,
        recipientId: recipientId,
        recipientName: recipientName,
        sentDate: sentDate,
        readStatus: false,
      });

      if (response.status === 200) {
        alert('답장이 성공적으로 전송되었습니다.');
        navigate(`/profile/${recipientId}`);
      }
    } catch (error) {
      console.error('답장 전송 중 오류가 발생했습니다:', error);
      alert('답장 전송 중 오류가 발생했습니다.');
    }
  };

  if (!letter) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Header />
      <div className="letter-detail-wrapper">
        <div className="reply-letter-detail-container">
          <form onSubmit={handleReplySubmit}>
            <input
              type="text"
              value={author}
              onChange={handleAuthorChange}
              placeholder="보내는 사람 이름을 입력하세요"
              style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
            <input
              type="text"
              value={replyTitle}
              onChange={handleTitleChange}
              placeholder="답장 제목을 입력하세요"
              style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
            <textarea
              className='input_reply'
              value={replyContent}
              onChange={handleContentChange}
              placeholder="답장 내용을 입력하세요"
              rows="10"
              style={{ width: '90%', padding: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
            <button type="submit" className="submit-button">답장 보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReplyPage;
