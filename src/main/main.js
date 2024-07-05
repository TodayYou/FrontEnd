import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './main.css';
import axios from "axios";
import Logo from '../component/Logo'; // Logo 컴포넌트 불러오기
// import todayYouAxios from '../apis/axios.js';

function Main() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    try {
      const response = await axios.post('https://todayyouuu.com/api/users', {
        username: nickname,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { token, userId } = response.data;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userId',userId);

      // 폼 리셋
      setNickname('');
      setPassword('');

      // /options 페이지로 이동
      navigate('/options');
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="logo-header">
        <Logo /> {/* 로고 컴포넌트 사용 */}
      </div>
      <div className="container">
        <h1>로그인/회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
