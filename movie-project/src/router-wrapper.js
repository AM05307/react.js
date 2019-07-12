import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const RouterWrapper = () => {
  // BrowserRouter로 App을 감쌈 
  return <BrowserRouter><App /></BrowserRouter>
}

export default RouterWrapper;