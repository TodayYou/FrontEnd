import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './checkLetters.css';

import Header from '../component/header';
import todayYouAxios from '../apis/axios.js';

const CheckLetters = () => {
  const [letters, setLetters] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await todayYouAxios.get(`/api/letters/received/${userId}`);
        setLetters(response.data);
        console.log(letters);
      } catch (error) {
        console.error('Error fetching letters:', error);
      }
    };

    fetchLetters();
  }, []);

  const handleDelete = async (letterId) => {
    try {
      await todayYouAxios.delete(`/api/letters/received/${userId}/${letterId}`);
      setLetters(letters.filter(letter => letter.id !== letterId));
    } catch (error) {
      console.error('Error deleting letter:', error);
    }
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
                <p>작성일: {letter.sentDate}</p>
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
