

// 인자는 자동으로 받는다. 변화할 Props, 이전 state
static getDerivedStateFromProps (nextProps, prevState) {
  // 여기서 특정 if 문이나 다른 구문을 통해, Props가 변화했을때 State를 변화시킬 수 있다. 
  // 만약에 변화시킬에 없으면 null를 리턴한다. 
  // 변화시킬 state가 있다면 객체 형태로 넘긴다. 
  // return { b : '15' } 
}

//static 메소드 이기 때문에 this.와 같은 형태로 호출할 수 없다. 사용에 신중해야 한다. 

componentDidMount() {
  // 처음 컴포넌트의 로딩이 끝났을 때 실행되는 메소드 
  // 첫 화면이 구성된 후 DOM 조작이나 API 요청등을 한다. 
}

// 변화할 다음 Prop와 변화할 다음 state를 받는다. 
shouldComponentUpdate(nextProps, nextState) {
  // 반드시 boolean 현태로 리턴을 해야 한다. 
  // true를 리턴할 시 컴포넌트가 리 렌더링 된다. 
  // false는 랜더링을 막는다. 

  // state의 변화가 일어났을 때만 재 랜더링 하는 코드 
  if (this.state !== nextState) {
    return true;
  }
  return false;
}

// 이전 props와 이전 state를 가진다. this.props와  this.state는 변경된 상태
// render 메소드가 호출된 직후에 실행됨 
getSnapshotBeforeUpdate(prevProps, prevState) {
  if (this.props.list.lenth > prevProps.list.length) {
    // 여기서 리턴하는 값이 componentDidUpdate의 3번째 인자로 전달된다. 
    return 'There is no more list';
  }

  return null;
}

// 컴포넌트가 업데이트 된 이후 마지막으로 실행되는 라이프사이클 메소드 
// 이전 props, 이전 state, getSnapShotBeforeUpdate에서 return 한 값 순서대로 인자가 들어온다.
componentDidUpdate(prevProps, prevState, snapshot) {
  // Props나 State의 변화를 감지한 후, DOM 업데이트를 해야 할 떄 주로 사용한다. 
  if (this.state !== prevState) {
    this.getnewGraph()
  }
}