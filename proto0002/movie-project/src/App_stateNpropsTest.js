import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count : 0
  };
  
  countUp() {
    this.setState({
      count : this.state.count + 1
    });
  }

  countDown() {
    this.setState({
      count : this.state.count -1 
    });
  }

  render() {
    return (
      <div className="App">
        <PropsTestClass count={this.state.count} />
        <div>
          <span>{this.state.count}</span>
        </div>
        <div> 
          <button onClick={this.countUp.bind(this)}>count Up!</button>
          <button onClick={this.countDown.bind(this)}>count Down!</button>
        </div>
      </div>

    );
  }
}

class PropsTestClass extends Component {
  render() {
    return ( 
      <div>
        <div> 
          <span>Hello I am PropsTestClass</span>
        </div>
        <div>받은 props의 데이터는 {this.props.count} 입니다.</div>
      </div>
    );
  }
}
export default App;
