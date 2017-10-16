import React from 'react';
import MovieSearch from '../../components/movie-search';
import style from './style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={`${style.main} container`}> 
        <MovieSearch />
      </div>
    );
  }
}

export default HomePage;
