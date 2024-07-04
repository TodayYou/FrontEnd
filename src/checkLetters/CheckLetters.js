import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './checkLetters.css';

import Header from '../component/header';

// 더미 데이터
const initialLetters = [
  { id: 1, title: 'Hello World', author: 'Alice', date: '2023-07-01' },
  { id: 2, title: 'React Tips', author: 'Bob', date: '2023-07-02' },
  { id: 3, title: 'CSS Tricks', author: 'Charlie', date: '2023-07-03' },
];

const CheckLetters = () => {
  const [letters, setLetters] = useState(initialLetters);

  const handleDelete = (id) => {
    setLetters(letters.filter(letter => letter.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="letters-container">
        <h1>받은 편지 목록</h1>
        <div className="letters-list">
          {letters.map((letter) => (
            <div key={letter.id} className="letter-item">
              <Link to={`/check-letters/${letter.id}`} className="letter-link">
                <h2>{letter.title}</h2>
                <p>작성자: {letter.author}</p>
                <p>작성일: {letter.date}</p>
              </Link>
              <button className="delete-button" onClick={() => handleDelete(letter.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckLetters;
