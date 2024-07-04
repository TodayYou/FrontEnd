// src/checkLetters/ReplyPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './checkLetters.css';
import Header from '../component/header';

// 더미 데이터 (원래 데이터에 답장 데이터를 추가할 수 있는 형태)
const letters = [
  { id: 1, title: 'Hello World', content: 'This is a hello world letter.', author: 'Alice', date: '2023-07-01' },
  { id: 2, title: 'React Tips', content: 'Here are some React tips.', author: 'Bob', date: '2023-07-02' },
  { id: 3, title: 'CSS Tricks', content: 'Let me show you some CSS tricks.', author: 'Charlie', date: '2023-07-03' },
];

const ReplyPage = () => {
  const { id } = useParams();
  const letter = letters.find(letter => letter.id === parseInt(id));
  const [author, setAuthor] = useState('');
  const [senderId, setSenderId] = useState(''); // 보내는 사람 ID 입력 필드 추가
  const [replyTitle, setReplyTitle] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setReplyTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSenderIdChange = (e) => {
    setSenderId(e.target.value);
  };

  const handleContentChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // 답장 저장 로직 추가 (예: 서버에 저장)
    console.log(`Reply to letter ${id}: Author: ${author}, Sender ID: ${senderId}, Title: ${replyTitle}, Content: ${replyContent}`);
    navigate(-1); // 이전 페이지로 이동
  };

  if (!letter) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Header/>
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
