import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SentLetters.css';

import Header from '../component/header';

// 더미 데이터 (보낸 편지 목록)
const initialSentLetters = [
  { id: 1, title: 'Hello World', content: 'This is a reply to hello world.', author: 'You', recipient: 'Alice', date: '2023-07-02' },
  { id: 2, title: 'React Tips', content: 'These are some tips in response to your React tips.', author: 'You', recipient: 'Bob', date: '2023-07-03' },
  { id: 3, title: 'CSS Tricks', content: 'These are some tricks in response to your CSS tricks.', author: 'You', recipient: 'Charlie', date: '2023-07-04' },
];

const SentLetters = () => {
  const [sentLetters, setSentLetters] = useState(initialSentLetters);

  const handleDelete = (id) => {
    setSentLetters(sentLetters.filter(letter => letter.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="letters-container">
        <h1>작성한 편지 목록</h1>
        <div className="letters-list">
          {sentLetters.map((letter) => (
            <div key={letter.id} className="letter-item">
              <Link to={`/sent-letters/${letter.id}`} className="letter-link">
                <h2>{letter.title}</h2>
                <p>받는 사람: {letter.recipient}</p>
                <p>{letter.content}</p>
              </Link>
              <button className="delete-button" onClick={() => handleDelete(letter.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentLetters;
