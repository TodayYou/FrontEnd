import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SentLetters';

import Header from '../component/header';


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
return (
  <div>
    <Header/>
  <div className="sent-letter-detail-wrapper">
   
    <div className="sent-letter-detail-container">
      <div className="sent-letter-header">
        <h1 className="sent-letter-title">{letter.title}</h1>
        <p className="sent-letter-meta">{letter.date} 작성자: {letter.author}</p>
      </div>
      <p className="sent-letter-content">{letter.content}</p>
    </div>
    
  </div>
  </div>
);
};


export default LetterDetail;
