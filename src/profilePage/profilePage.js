import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './profilePage.css';
import Header from '../component/header';
import Logo from '../component/Logo';
import axios from "axios";
import todayYouAxios from '../apis/axios';

const ProfilePage = () => {
  const { profileId } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://todayyouuu.com/api/users/profile/${profileId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('프로필을 가져오는 중 오류가 발생했습니다.');
      }
    };

    fetchUserProfile();
  }, [profileId]);

  if (!userProfile) {
    return <div>프로필을 찾을 수 없습니다.</div>;
  }

  const handleWriteLetter = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('accessToken');

    if (userId && token) {
      // 로그인 상태 확인됨, 편지 작성 페이지로 이동
      navigate(`/write-letter/${profileId}`);
    } else {
      // 로그인 상태가 아니면 회원가입 페이지로 이동
      navigate('/');
    }
  };

  const handleJoin = () => {
    navigate('/');
  };

  return (
    <div className="profile-body">
      <div className="logo-header">
        <Logo /> {/* 로고 컴포넌트 사용 */}
      </div>
      <div className="profile-container">
        <h2>{userProfile.username}의 프로필</h2>
        <p>{userProfile.bio}</p>
        <div className="profile-buttons">
          <button className="profile-button" onClick={handleWriteLetter}>편지 작성하기</button>
          <button className="profile-button" onClick={handleJoin}>나도 가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
