import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/Logo';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#FEF7FF"/>
        </svg>
      </button>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
