import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import theMovieDb from '../../lib/themoviedb/themoviedb';
import { POSTER_SIZE } from '../../config/moviedb';
import style from './style.scss';

class MovieDisplay extends React.Component {
  render() {
    let imagePath =
      this.props.poster
      ? theMovieDb.common.getImage({
        size: POSTER_SIZE,
        file: this.props.poster.substr(1) // a workaround for themoviedb lib attaching an unneeded '/' 
      })
      : '';
    let overview =
      this.props.overview.length > 350
      ? this.props.overview.substr(347) + '...'
      : this.props.overview;
    return (
      <Link to={'/movie/'+this.props.id}>
        <div className={`container-fluid ${style.movieDisplay}`}>
          <div className="row">
            <div className={`col-xs-4 col-md-3 ${style.imgContainer}`}>
              <img src={imagePath}/>
            </div>
            <div className={`col-xs-8 col-md-9 ${style.txtContainer}`}>
              <h3>{this.props.title}</h3>
              <h5>Original release date: {this.props.release}</h5>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  } 
}

MovieDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  poster: PropTypes.string,
  overview: PropTypes.string.isRequired
};

export default MovieDisplay;
