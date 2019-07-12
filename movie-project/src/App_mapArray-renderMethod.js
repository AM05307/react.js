import React, { Component } from 'react';
import './App.css';
import Header from './header/header';

class App extends Component {
  state = {
    exampleArray: [
      1.1,
      2.3,
      3.3,
      4.5,
      5.5,
      6.1,
      7.7,
      8.8
    ]
  };
  
  render() {
    console.log('render');

    const mapData = arrayState1 => {
      return arrayState1.map((arrayNumber1, idx) => {
        return <div key={idx}> The original number is {(arrayNumber1)}</div>;
      });
    };

    // setState를 하지 않고 render메소드에서 가공하는 예제
    const cleanData = arrayState => {
      return arrayState.map((arrayNumber, idx) => {
        return <div key={idx}>The number is {Math.round(arrayNumber)}</div>;
      });
    };
    
    return (
      <div className="App">
        <div className="App">
          Life cycle test
          
          {mapData(this.state.exampleArray)}

          {/* setState를 하지 않고 render메소드에서 가공하는 예제 */}
          {cleanData(this.state.exampleArray)}

        </div>
      </div>
    );
  }
}

export default App;
