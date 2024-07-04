// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/main';
import Options from './options/option';
import CheckLetters from './checkLetters/CheckLetters';
import LetterDetail from './checkLetters/LetterDetail';
import ReplyPage from './checkLetters/ReplyPage'; // 새로운 컴포넌트 임포트
import SentLetters from './sendLetters/SentLetters';
import SentLetterDetail from './sendLetters/SentLettersDetail';
import ProfilePage from './profilePage/profilePage';
import WriteLetterPage from './profilePage/WriteLetterPage';
  function App() {
    return (
      <Router>
        <div className="App">

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/options" element={<Options />} />
              <Route path="/check-letters" element={<CheckLetters />} />
              <Route path="/check-letters/:id" element={<LetterDetail />} />
              <Route path="/reply/:id" element={<ReplyPage />} /> 
              <Route path="/sent-letters" element={<SentLetters />} /> 
              <Route path="/sent-letters/:id" element={<SentLetterDetail />} /> {/* Add route for sent letter detail */}
              <Route path="/profile/:profileId" element={<ProfilePage />} />
              <Route path="/write-letter/:profileId" element={<WriteLetterPage />} /> 
            </Routes>

        </div>
      </Router>
    );
  }
  

export default App;
