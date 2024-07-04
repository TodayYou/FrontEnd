// src/options/Options.js
import React from 'react';
import { Link } from 'react-router-dom';
import './option.css';

import Header from '../component/header';
function Options() {
  const handleShareProfile = () => {
    const profileUrl = window.location.origin + '/profile/' + 'userProfileId'; // 실제 사용자 프로필 ID로 변경 필요
    navigator.clipboard.writeText(profileUrl).then(() => {
      alert('프로필 URL이 클립보드에 복사되었습니다.');
    });
  };
  
  const handleDeleteAccount = () => {
    // 여기서 탈퇴 로직을 추가하세요.
    console.log('계정 탈퇴');
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
