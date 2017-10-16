import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/movie-details';
import style from './style.scss';

class MoviePage extends React.Component {
  render() {
    return (
      <div className={`${style.main} container`}> 
        <MovieDetails id={this.props.params.id} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  params: PropTypes.object
};

export default MoviePage;
