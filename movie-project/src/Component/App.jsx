import React, { Component } from 'react';
import './App.css';
import PropsComponentExample from './component/PropsComponent';
import NoPropsComponentExample from './component/noPropsComponent';

// App.js 컴포넌트에 1초마다 setState가 일어나게 만든다.
class App extends Csomponent {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 500);
  }

  render(){
    return <div className="App">hello</div>;
  }
}

export default App;



