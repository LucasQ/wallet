import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import reportWebVitals from './reportWebVitals';
import TopNavigationBar from './Components/TopNavigationBar/TopNavigationBar';
import Router from './Routes/Router';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <header/>
      <TopNavigationBar />
    <header/>
    <footer>
    </footer>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
