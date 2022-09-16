import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import HeaderSection from './components/header';
import Top from './components/top';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ヘッダー */}
    <HeaderSection />
    {/* コンテンツ */}
    <Top />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();