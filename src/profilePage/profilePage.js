import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './profilePage.css';
import Header from '../component/header';
import Logo from '../component/Logo';
// 더미 데이터 (실제 데이터는 서버에서 가져와야 함)
const userProfiles = [
  { id: 1, nickname: 'Alice', bio: 'Hello, I am Alice. I love coding and sharing knowledge.' },
  { id: 2, nickname: 'Bob', bio: 'Hi, I am Bob. I enjoy hiking and exploring nature.' },
  { id: 3, nickname: 'Charlie', bio: 'Hey, I am Charlie. Photography is my passion.' },
];

const ProfilePage = () => {
  const { profileId } = useParams();
  const userProfile = userProfiles.find(profile => profile.id === parseInt(profileId));
  const navigate = useNavigate();

  if (!userProfile) {
    return <div>프로필을 찾을 수 없습니다.</div>;
  }

  const handleWriteLetter = () => {
    navigate(`/write-letter/${userProfile.id}`);
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
      <h1>{userProfile.nickname}의 프로필</h1>
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
