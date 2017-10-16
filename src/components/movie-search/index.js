import React from 'react';
import PropTypes from 'prop-types';
import theMovieDb from '../../lib/themoviedb/themoviedb';
import { API_KEY } from '../../config/moviedb';
import SearchBox from '../search-box';

class MovieSearch extends React.Component {
  componentWillMount() {
    theMovieDb.common.api_key = API_KEY;  
  }
  
  render() {
    return <SearchBox />;
  } 
}

export default MovieSearch;
