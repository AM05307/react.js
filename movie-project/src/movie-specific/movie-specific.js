// 영화 1개를 소개하는 Component
import React from 'react';
import { withRouter } from 'react-router-dom';


class MovieSpecific extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return <>
      {this.props.movieData !== null && <div>Movie Specific</div>}
    </>   
  }
}

export default withRouter (MovieSpecific);