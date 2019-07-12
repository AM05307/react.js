import React, { Component } from 'react';
import Note from './note/note';
import './note-list.scss';

// 각각의 note를 전부 관장하는 컴포넌트
// 노트들의 리스트를 보여주는 컴포넌트
// 이 안의 노트 하나하나가 note.js

class NoteList extends Component {
  static defaultProps = {
    notes: [],
    search: ''
  };

  render() {
    // Note-list의 렌더링 부분을 search에 따라서 변경될 수 있도록 한다. 
    const filteredNotes = filterNotes => {
      return filterNotes
        .map ((note, idx) => {
          return { ...note, idx };
        })
        .filter(note => {
          return note.text.indexOf(this.props.search) !==-1;
        });
    };
    
    // map을 통해 모든 요소를 통과하면서 idx를 추가한다. 
    // 필터를 거쳐서 props.search에 따라 없애준 후, noteListReturn에서 아까와 같이 렌더링해준다. 
    const noteListReturn = notes => {
      return filteredNotes(notes).map((note, idx) => {
        return (
          <Note 
            key={idx} 
            noteNumber={idx} 
            title={note.title} 
            text={note.text} 
            date={note.date} 
            edited={note.edited}
            // NoteList 컴포넌트에서 전달받은 변경, 삭제의 props를 note로 전달
            changeNote={this.props.changeNote}
            deleteNote={this.props.deleteNote} 
          />
        );
      });
    };
  
    // const noteListReturn = notes => {
    //   return notes.map((note, idx) => {
    //     return (
    //       <div key={idx}>
    //       <div>{note.title}</div>
    //       <div>{note.text}</div>
    //     </div>
    //     );      
    //   });
    // };

    return (
      <div id="note-list-container">
        <div id="note-list">{noteListReturn(this.props.notes)}</div>
      </div>
    );
  }
}

export default NoteList;
