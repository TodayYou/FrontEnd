import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './WriteLetterPage.css';
import Header from '../component/header';
import todayYouAxios from '../apis/axios';

const WriteLetterPage = () => {
  const { profileId } = useParams();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      const response = await todayYouAxios.post('/api/letters', {
        title,
        content,
        author,
        senderId: userId,
        recipientId: profileId,
        recipientName,
        sentDate: new Date().toISOString(),
        readStatus: false,
      });

      if (response.status === 200) {
        alert('편지가 성공적으로 전송되었습니다.');
        navigate(`/profile/${profileId}`);
      }
    } catch (error) {
      console.error('편지 전송 중 오류가 발생했습니다:', error);
      alert('편지 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <Header />
      <div className="write-letter-container">
        <h3>편지 작성하기</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="작성자 이름을 입력하세요"
            style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="편지 제목을 입력하세요"
            style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="받는 사람 이름을 입력하세요"
            style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <textarea
            className='input_content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="편지 내용을 입력하세요"
            rows="10"
            style={{ width: '90%', padding: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <button type="submit" className="submit-button">편지 보내기</button>
        </form>
      </div>
    </div>
  );
};

export default WriteLetterPage;
