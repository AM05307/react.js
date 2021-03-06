import React from 'react';
import styled from 'styled-components';
import { confetti } from 'dom-confetti';
import numeral from 'numeral';
import { withRouter } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${props =>
    props.backgroundImage
      ? `linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0)), url(${props.backgroundImage})`
      : ''};
  background-position: 50% 50%;
  background-size: cover;
  padding: 2rem;
  transition: 0.25s;
  &:hover {
    padding-top: 10rem;
    padding-bottom: 10rem;
    > div.sub-introduce {
      display: flex;
      flex-direction: column;
    }
    > div.like-button {
      display: flex;
      justify-content: center;
    }
  }

  > span.title {
    font-size: 3.5rem;
    color: #61dafb;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  > div.genre {
    display: flex;
    margin-bottom: 1rem;

    > span {
      margin-right: 1rem;
      font-size: 1rem;
      color: #f5f5f5;
    }
  }
  > span.sub {
    font-size: 2rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  > div.sub-introduce {
    display: none;
    padding-top: 2rem;
    transition: 0.25s;

    > span {
      color: white;
      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
    }
  }
  > div.like-button {
    display: none;
    padding-top: 4rem;

    > span {
      width: 100px;
      height: 100px;
      cursor: pointer;
      background-image: ${props =>
        props.likeImage
          ? `linear-gradient(rgba(245, 245, 245, 0), rgba(245, 245, 245, 0)), url(${props.likeImage})`
          : ''};
      background-position: 50% 50%;
      background-size: cover;
    }
  }
`;

class MovieList extends React.Component {
  //실제 dom 을 담을 수 있는 공간
  domConfettiRefs = this.props.movieData.map(() => React.createRef());

  showParadise = idx => {
    confetti(this.domConfettiRefs[idx].current);
  };

  urlChange = movieName => {
    this.props.history.push(`/${movieName}`);
  }

  componentDidMount() {
    
  }

  render(){

    const showGenre = (array) =>{
      //배열 데이터를 풀어옴
      return array.map((genre, idx) => {
        return <span key={idx}>{genre}</span>; //장르 개수만큼 span tag에 풀어냄
      });
    };

    const convertEnterToLine = string => {
      const stringArray = string.split('\n');
      return stringArray.map((comment, idx) => {
        return <span key={idx}>{comment}</span>;
      });
    };

    // props 제대로 넘어왔는지 확인하는 메소드
    console.log(this.props.movieData); 

    const renderMovieList = lists => {
      return lists.map((unit, idx) => {
        return (
          <StyledDiv key={idx} backgroundImage={unit.image} likeImage={'/images/like.svg'}>
            <span className="title" onClick={() => this.urlChange(unit.movieName)}>{unit.movieName}</span>
            <div className="genre">{showGenre(unit.genre)}</div>
            <span className="sub">{unit.releaseDate === null ? '미개봉' : `${unit.releaseDate} 개봉`}</span>
            {unit.releaseDate !== null && (
              <span className="sub">
                {`누적 관객 수 : ${numeral(unit.totalAudience).format('0,0')}명 (${unit.grade}/10)`}
              </span>
            )}

            <div className="sub-introduce">{convertEnterToLine(unit.subIntro)}</div>
            <div className="like=button">
              <span 
                ref={this.domConfettiRefs[idx]}
                onClick={() => {
                  this.showParadise(idx);
                }}
                >
              </span>
            </div>
            
          </StyledDiv>

        );
      });
    };

    return <div>{renderMovieList(this.props.movieData)}</div>;

  }

}

export default withRouter (MovieList);
