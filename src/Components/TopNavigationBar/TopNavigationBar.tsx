import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNavigationBar.css';

function TopNavigationBar() {
  const [current, setCurrent] = useState('home');

  function handleCurrent(page: string): void {
    setCurrent(page);
  }

  return (
    <div className="topnav">
      <Link to="/home" className={current === 'home' ? 'active' : ''} onClick={() => handleCurrent('home')}>Home</Link>
      <Link to="/conta" className={current === 'conta' ? 'active' : ''} onClick={() => handleCurrent('conta')}>Contas</Link>
    </div>
  );
}

export default TopNavigationBar;
