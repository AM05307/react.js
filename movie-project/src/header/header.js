import React from 'react';
import './header.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;

  > a {
    line-height: 2;
    font-size: 5rem;
    font-weight: bold;
    color: #7f7f7f;
    transition: 0.25s;
    cursor: pointer;

    &:hover {
      color: #FAB6E3;
    }
  }
`;

class Header extends React.Component {
    render() {
      // Header 컴포넌트에서 받는 headerMessage props
      return <HeaderDiv>
        <Link to="/">
          {this.props.headerMessage}
        </Link>;
      </HeaderDiv>
    }
}

export default Header;