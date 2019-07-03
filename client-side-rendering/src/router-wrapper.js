import React, { Component } from 'react'

// 설치한 모듈에서 제공해주는 태그
// 이 태그가 있어야 라우팅을 진행한 코드 부분이 작동한다. 
import { BrowserRouter } from 'react-router-dom';

// App을 감싸주기 위해서 App을 import 해준다. 
import App from './App';

class RouterWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default RouterWrapper;