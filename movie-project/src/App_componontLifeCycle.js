import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App: constructor');
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentDidUpdate() {
    console.log('App : componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App : componentWillUnmount');
  }

  render() {
    console.log('App : render');

    return (
      <div className="App">
        Life cycle test1
        <Child />
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    console.log('Child : construnctor');
  }

  componentDidMount() {
    console.log('Child : componentDidMount');
  }

  componentDidUpdate() {
    console.log('Child : componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Child : componentWillUnmount');
  }

  render() {
    console.log('Child : render');
    
    return (
      <div className="App">Life cycle test2</div>
    );
  }

}

export default App;
