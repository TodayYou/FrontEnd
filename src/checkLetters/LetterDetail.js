import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './checkLetters.css';
import Header from '../component/header';
import todayYouAxios from '../apis/axios';

const LetterDetail = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);
  const [read, setRead] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await todayYouAxios.get(`/api/letters/${id}`);
        setLetter(response.data);
        setRead(response.data.readStatus);
      } catch (error) {
        console.error('Error fetching letter:', error);
      }
    };

    fetchLetter();
  }, [id]);

  if (!letter) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  const markAsRead = async () => {
    const userId = localStorage.getItem('userId');
    try {
      await todayYouAxios.put(`/api/letters/${userId}/received/${id}/read`);
      setRead(true);
    } catch (error) {
      console.error('Error marking letter as read:', error);
    }
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
