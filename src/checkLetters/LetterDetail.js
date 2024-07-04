import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './checkLetters.css';
import Header from '../component/header';
// 더미 데이터
const letters = [
  { id: 1, title: 'Hello World', content: 'This is a hello world letter.', author: 'Alice', date: '2023-07-01', hint: 'Loves coding' },
  { id: 2, title: 'React Tips', content: 'Here are some React tips.', author: 'Bob', date: '2023-07-02', hint: 'Enjoys hiking' },
  { id: 3, title: 'CSS Tricks', content: 'Let me show you some CSS tricks.', author: 'Charlie', date: '2023-07-03', hint: 'Fan of photography' },
];

const LetterDetail = () => {
  const { id } = useParams();
  const letter = letters.find(letter => letter.id === parseInt(id));
  const [read, setRead] = useState(false);
  const navigate = useNavigate();

  if (!letter) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  const markAsRead = () => {
    setRead(true);
  };
  const handleReply = () => {
    navigate(`/reply/${id}`);
  };

  return (
    <div>
       <Header />
    <div className="letter-detail-wrapper">
       
      <div className="letter-detail-container">
        
        <div className="letter-header">
          <h1 className="letter-title">{letter.title}</h1>
          <p className="letter-meta">{letter.date} 작성자: {letter.author}</p>
        </div>
        <p className="letter-content">{letter.content}</p>
        
      </div>
      <div className="read-confirmation-wrapper">
      <button className="reply-button" onClick={handleReply}>답장하기</button>
        {!read && (
          <div className="read-confirmation">
            <p>상대방에게 읽었다고 표시할까요?</p>
            <div className="confirm-buttons">
              <button className="confirm-button yes" onClick={markAsRead}>네</button>
              <button className="confirm-button no" onClick={() => navigate(-1)}>아니요</button>
            </div>
          </div>
        )}
        {read && <p className="read-status">읽음</p>}
      </div>
    </div>
    </div>
  );
};

export default LetterDetail;
