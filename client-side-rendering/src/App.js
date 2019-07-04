import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import First from './components/first';
import Second from './components/second';
import Main from './components/main';

class App extends Component {
  render () {
    return (
     <div className="App">
        클라이언트 사이드 렌더링을 해 보겠습니다.
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

export default App;
