import React, { Component } from 'react';

class NoPropsComponentExample extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props === nextProps) {
      return false;
    }

    if (this.state === nextState) {
      return false;
    }

    return true;
  }

  render() {
    return <div>Props를 받지 않는 일반 컴포넌트</div>;
  }
}

export default NoPropsComponentExample;