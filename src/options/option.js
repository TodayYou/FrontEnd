// src/options/Options.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './option.css';
import todayYouAxios from "../apis/axios";
import Header from '../component/header';

function Options() {
  const navigate = useNavigate();

  const handleShareProfile = () => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
    const profileUrl = `${window.location.origin}/profile/${userId}`;
    navigator.clipboard.writeText(profileUrl).then(() => {
      alert('프로필 URL이 클립보드에 복사되었습니다.');
    });
  };


  const handleDeleteAccount = async () => {
    try {
      const userId = localStorage.getItem("userId");
      await todayYouAxios.delete(`/api/users/${userId}`);
      localStorage.removeItem('accessToken');
      alert('계정이 성공적으로 탈퇴되었습니다.');
      navigate('/'); // 탈퇴 후 메인 페이지로 이동
    } catch (error) {
      console.error('계정 탈퇴 중 오류 발생:', error);
      alert('계정 탈퇴 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <Header/>
      <div className="options-container">
        <div className="options">
          <Link to="/check-letters" className="option">
            <i className="fas fa-envelope-open-text"></i>
            <p>편지 확인하기</p>
          </Link>
          <Link to="/sent-letters" className="option">
            <i className="fas fa-pencil-alt"></i>
            <p>작성한 편지</p>
          </Link>
          
          <div className="option" onClick={handleShareProfile}>
              <i className="fas fa-share-alt"></i>
              <p>프로필 공유하기</p>
            </div>
        </div>

        <div className="footer">
            <button className="delete-button" onClick={handleDeleteAccount}>탈퇴하기</button>
        </div>
      </div>
    </div>
  );
}

export default Options;
