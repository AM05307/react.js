import React, { Component } from 'react';

//App.js의 count를 상속받는 컴포넌트 : props를 잘 받는 컴포넌트 
class PropsComponentExample extends Component {
  shouldComponentUpdate(nextProps){
    if(this.props === nextProps) {
      return false;
    }
    return true;
  }

  render() {
    return <div>Props를 잘 받는 컴포넌트 {this.props.count}</div>;
  }
}

export default PropsComponentExample;