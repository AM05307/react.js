import React, { Component } from 'react';
import { Switch, Route, Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import First from './components/first';
import Second from './components/second';
import Main from './components/main';

class App extends Component {

  // componentDidMount(){
  //   console.log(this.props);
  // };

  go = () => {
    this.props.history.go(1);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render () {
    const activeStyle = {
      color: '#FFB9D5'
    };

    return (
     <div className="App">
        클라이언트 사이드 렌더링을 해 보겠습니다.

        <div>
          <button onClick={this.goBack}>뒤로 가기</button>
          <button onClick={this.go}>앞으로 가기</button>
        </div>

        <div>
          <ul className="link-list">
            <li>
              {/* 다른 태그와 마찬가지로 className을 넣을 수 있다 */}
              {/* 이동하려고 하는 URL을 to라는 Attrinbute로 표현 */}
              <NavLink activeStyle={activeStyle} exact className="link" to="/">
                메인 페이지로 이동
              </NavLink>
            </li>

            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/home">
                Home 페이지로 이동
              </NavLink>
            </li>

            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/first">
                First 페이지로 이동
              </NavLink>
            </li>

            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/second">
                Second 페이지로 이동
              </NavLink>
            </li>
          </ul>
        </div>

        {/* react-router-dom에서 제공하는 태그입니다. */}
        {/* Route 컴포넌트의 path경로에 따라서 지정해둔 component가 보여지는 기능 */}
        {/* path 부분에 url 경로를 넣고, component의 to의 경로에서 보여주고 싶은 컴포넌트를 넣는다. */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/first" component={First}/>
          <Route path="/second" component={Second}/>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    ); 
  }
}

// 원래는 이 형태 
// export default App;
// withRouter로 감싸 줍니다.
export default withRouter(App);
