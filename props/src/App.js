import React, { Component } from 'react';
import './App.css';
import Child from './child'

class App extends Component {
  state = {
    arr : [1,2,3,3,45,6,6,67,5,4]
  }
  
  render() {
    return (
      <div className="App">
        <Child testArray={this.state.arr} />
      </div>
    );
  }
}

export default App;
