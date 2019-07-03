import React from 'react';
import ReactDOM from 'react-dom';

// index.js 에서 app을 직접 로딩할 필요가 없어졌다. 
// import App from './App';
// 감싸준 RouterWrapper 컴포넌트를 넣어준다.
// 이미 RouterWrapper 컴포넌트가 App.js를 가지고 있다.

import RouterWrapper from './router-wrapper';

// RouterWrapper 컴포넌트안에 App.js가 존재한다. 
ReactDOM.render(<RouterWrapper />, document.getElementById('root'));