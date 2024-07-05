import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SentLetters.css';

import Header from '../component/header';
import todayYouAxios from '../apis/axios';

const SentLetters = () => {
  const [sentLetters, setSentLetters] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await todayYouAxios.get(`/api/letters/sent/${userId}`);
        setSentLetters(response.data);
      } catch (error) {
        console.error('Error fetching letters:', error);
      }
    };

    fetchLetters();
  }, [userId]);

  const handleDelete = async (letterId) => {
    try {
      await todayYouAxios.delete(`/api/letters/sent/${userId}/${letterId}`);
      setSentLetters(sentLetters.filter(letter => letter.id !== letterId));
    } catch (error) {
      console.error('Error deleting letter:', error);
    }
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
