import React, { Component } from 'react';
import './App.css';
import Header from './header/header';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');

    return <div className="App">Life cycle test</div>
  }
}

export default App;
