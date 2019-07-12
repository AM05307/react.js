import React from 'react';
import Header from './header/header';
import styled from 'styled-components';
import { data } from './data';
import MovieList from './movie-list/movie-list';
import MovieSpecific from './movie-specific/movie-specific';

import { Switch, Route, withRouter} from 'react-router-dom';

const MainDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component{
  state = {
    headerMessage: 'Movie App',
    movieData: data,
    currentMovieData: null
  }

  // 영화 한개의 정보를 업데이트하는 메소드 
  getCurrenMovieData = () => {
    const { pathname } =  this.props.location;
    // 현재 url pathname을 문자 '/' 기준으로 나누었음
    console.log(pathname.split('/').join(''));
    const userMovieName = pathname.split('/').join('');

    const movieNameCheck = this.state.movieData.map((movie, idx) => {
      //filter : 같으면 배열을 남겨두고 아니면 빼버림 
      // url의 영화이름과 state의 영화 이름 중 같은 이름이 있는 체크 
      return { isMatch: movie.movieName === userMovieName, idx} 
    }).filter(movie => movie.isMatch);
    console.log(movieNameCheck);

    // 같은 이름이 있으면
    if (movieNameCheck.length === 1) {
      console.log('is matched');
      // 영화 한개의 데이터를 업데이트
      this.setState({
        currentMovieData: this.state.movieData[movieNameCheck[0].idx]        
      })
    } else {
      // 없으면 그대로 돌려보냄 
      this.setState({
        currentMovieData: null
      })
    }  
  }

  // url이 업데이트가 됐을때 다시 한번 더 getCurrentMovieData 함수를 실행시켜서 this.setState를 읽게 하는 함수 
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getCurrenMovieData()
    }
  }

  componentDidMount() {
    this.getCurrenMovieData();
  }
  
  render() {
    return <MainDiv>
      {/* Header는 Router 처리할 필요 없음. */}
      <Header headerMessage={this.state.headerMessage}/>
      
      {/* Content만 Router 처리하면 됨 */}
      <Switch>
        {/* path="/:movieName" : 처음에 어떤 글자가 오던지 movieName의 페이지로 가게함 */}
        <Route path="/:movieName" render={() => <MovieSpecific movieData={this.state.currentMovieData} />} />
        <Route path="/" exact={true} render={() => <MovieList movieData={this.state.movieData} />} />
      </Switch>
    </MainDiv>
  }
}

export default withRouter (App);
