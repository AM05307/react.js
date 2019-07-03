import React, { Component } from 'react';
import './modal.scss';

class ModalPage extends Component {
  render = () => (
    // 모달에 생성 폼을 children props로 넣어주면, 모달 컴포넌트에서는 다시 props로 넘긴 컴포넌트를 렌더링 해주는 방식. 
    <div className="modal">
      <div className="modal-card">
        {this.props.children && this.props.children}
        </div>
    </div>
  );
}

export default ModalPage;