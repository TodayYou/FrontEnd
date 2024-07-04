import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WriteLetterPage.css';
import Header from '../component/header';

// 더미 데이터 (실제 데이터는 서버에서 가져와야 함)
const userProfiles = [
  { id: 1, nickname: 'Alice' },
  { id: 2, nickname: 'Bob' },
  { id: 3, nickname: 'Charlie' },
];

const WriteLetterPage = () => {
  const { profileId } = useParams();
  const userProfile = userProfiles.find(profile => profile.id === parseInt(profileId));
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  if (!userProfile) {
    return <div>프로필을 찾을 수 없습니다.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 편지 저장 로직 추가 (예: 서버에 저장)
    console.log(`To: ${userProfile.nickname}, From: ${author}, Title: ${title}, Content: ${content}`);
    navigate('/options'); // 옵션 페이지로 이동
  };

  return (
    <div>
      <Header />
      <div className="write-letter-container">
        <h3>편지 작성하기</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="작성자 이름을 입력하세요"
            style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="편지 제목을 입력하세요"
            style={{ width: '90%', padding: '1rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <textarea
          className='input_content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="편지 내용을 입력하세요"
            rows="10"
            style={{ width: '90%', padding: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
            required
          />
          <button type="submit" className="submit-button">편지 보내기</button>
        </form>
      </div>
    </div>
  );
};

export default WriteLetterPage;
