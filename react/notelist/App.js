// 모든 컴포넌트는 App.js를 통해서 관리.
// 데이터는 App.js를 통해야한다.  search 컴포넌트과 note-list가 직접적으로 서로간 state를 주고받을 수 있는 방법 없기 때문이다.

import React, { Component } from 'react';
import styled from 'styled-components';
import NoteList from './component/note-list/note-list';
import ModalPage from './component/modal/modal';
import NoteRaw from './component/note-raw/note-raw';
import SearchComponent from './component/search-bar/search-bar';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppDiv = styled.div`
  width: 90vw;
  height: 90vh;
  border-radius: 0.1rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #FFE3B9;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

// 기능 제작 순서 :  노트 리스트 보여주기 -> 노트 추가 -> 노트 편집 -> 노트 삭제 -> 노트 검색 순서
class App extends Component {

  state = {
    search: '', // 검색 용도로 사용하는 state
    notes: [ // 노트 리스트  
      // edited : 글이 편집되었을 때 (수정됨) 과 같은 메시지를 표현하기 위해서 만든 state
      { date: new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.', edited: false},
      { date: new Date(), text: '두 번째 메모', title: 'SECOND', edited: false}
    ]
  }

  // 모달 작성 버튼을 누르면 모달이 나오도록 하는 메소드
  toogleModal = () => {
    this.setState({
      modalToogle: !this.state.modalToogle
    });
  };

  // 검색
  onChangeSearchText = e => {
    this.setState({
      search: e.target.value
    });
  };

  // 노트 추가 메소드
  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, { title, text, date: new Date(), edited: false }]
    });
  };

  // 변경 : 원래 state에 있는 것을 변경하기 때문에 몇번째의 노트인지가 필요하므로 number값을 받음
  changeNote = (title, text, number) => {
    this.setState({
      notes: this.state.notes.map((note, idx) => (idx === number ? {...note, title, text, edited:true} : note))
    });
  };
  
  // 삭제 : 원래 state에 있는 것을 변경하기 때문에 몇번째의 노트인지가 필요하므로 number값을 받음
  deleteNote = number => {
    this.setState({
      notes: this.state.notes.filter((note, idx) => (idx === number ? false : true))
    });
  };

  render() {
    return (
      <Container>
        {/* modalToogle이 true일 때 and 연산을 통해서 ModalPage를 보여줌 */}
        {/* Modal JSX */}
        {this.state.modalToogle && (
          <ModalPage>
            {/* action : 모달 생성 메소드 , close : 생성 모달을 true : false로 바꾸는 메소드 */}
            <NoteRaw action={this.createNote} close={this.toogleModal} />
          </ModalPage>
        )}

        <AppDiv>
          <SearchBar>
            <div>
              <span>노트 만들기</span>
            </div>
            <div>
              {/* 이 버튼을 누를 때마다 modalToogle의 state는 false와 true를 옮겨다니게 된다. */}
              <button onClick={this.toogleModal}>노트 작성</button>
              <SearchComponent search={this.state.search} onChangeSearchText={this.onChangeSearchText} />
            </div>
          </SearchBar>

          {/* 노트리스트를 볼 수 있도록 note-list 컴포넌트를 불러옴. */}
          {/* note-list -> note에서 편집 삭제 버튼을 누를 떄 모달과 함께 실행되어야 하기 때문에 메소드 전달  */}
          {/* search={this.state.search}  : search 바인딩 */}
          <NoteList 
            search={this.state.search}
            notes={this.state.notes} 
            changeNote={this.changeNote}
            deleteNote={this.deleteNote}
          />
        </AppDiv>
      </Container>
    );
  }
}

export default App;
