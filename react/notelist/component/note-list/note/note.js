import React, { Component } from 'react';
import './note.scss';
import ModalPage from '../../modal/modal';
import NoteRaw from '../../../component/note-raw/note-raw';
import Delete from '../../../component/delete/delete';

class Note extends Component {
  // defaltProps를  통해서 타이틀과 텍스트, 날짜가 props로 담겨오지 않았을때 에러 처리.
  static defaultProps = {
    title: '',
    text: '',
    date: new Date()
  };

  // 수정모드와 삭제모드를 껏다 켰다 할 수 있는 state 생성 
  state = {
    showEditModal: false,
    showDeleteModal: false
  };

  // 수정모드 변경 메소드
  changeEditToogle = () => {
    this.setState({
      showChangeModal: !this.state.showChangeModal
    });
  };

  // 삭제모드 변경 메소드
  changeDeleteToogle = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  // 노트를 꾸미는 JSX
  render = () => (
    <div id="note">
      <div id="note-menu">
        <span>{this.props.title}</span>
        <span>
          <span id="showChangeModal" onClick={this.changeEditToogle}>
            편집
          </span>
          <span id="showDeleteModal" onClick={this.changeDeleteToogle}>
            삭제
          </span>
        </span>
      </div>

    <div id="date">
      <span>
        {this.props.date.toISOString()}
        {this.props.edited && ' (edited)'}
      </span>
    </div>
      
    <div>{this.props.text}</div>

    {this.state.showChangeModal && (
      <ModalPage>
        <NoteRaw
          noteNumber={this.props.noteNumber}
          action={this.props.changeNote}
          close={this.changeEditToogle}
          subject={'노트 수정'}
          title={this.props.title}
          text={this.props.text}
        />
      </ModalPage>
    )}

    {this.state.showDeleteModal && (
      <ModalPage
        close={() => {
          this.toogle({ target : { id : 'showDeleteModal'} });
        }}
      >
      <Delete 
        number={this.props.noteNumber}
        action={this.props.deleteNote}
        title={this.props.title}
        close={this.changeDeleteToogle}
      />
      </ModalPage>
    )}

    </div>
  );
}

export default Note;