// 노트 삭제 클릭시 '정말 삭제하시겠습니까?' 와 같은 메세지를 띄우는 창
// 단독으로 동작할 수 없고, modal에 담긴 형태로 작동해야 함.

import React, { Component } from 'react';
import './delete.scss';

class Delete extends Component {
  execute = () => {
    this.props.action(this.props.number);
    this.props.close();
  }

  render = () => (
    <>
      <div id="momo-what-for">
        <span>노트 삭제</span>
      </div>

      <div>정말 노트를 삭제하시겠어요? ({this.props.title})</div>

      <div id="memo-button">
        <button onClick={this.execute}>삭제하기</button>
      </div>
    </>
  );
}

export default Delete;