import React from 'react';
import PropTypes from 'prop-types';
import theMovieDb from '../../lib/themoviedb/themoviedb';
import CastTable from './comp.cast-table.js';
import { Link } from 'react-router';
import { API_KEY, BACKDROP_SIZE } from '../../config/moviedb';
import style from './style.scss';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: null,
      error: null
    };
  }

  componentWillMount() {
    theMovieDb.common.api_key = API_KEY;
  }

  componentDidMount() {
    theMovieDb.movies.getById(
      {id: this.props.id},
      success => {
        this.setState({
          error: null,
          details: JSON.parse(success)
        });
      },
      error => {
        this.setState({
          error: error,
          details: null
        });
      }
    );
  }

  render() {
    let details = this.state.details;

    if (details) {
      let backdropPath =
        details.backdrop_path
        ? theMovieDb.common.getImage({
          size: BACKDROP_SIZE,
          file: details.backdrop_path.substr(1) // a workaround for themoviedb lib attaching an unneeded '/' 
        })
        : '';
      return (
        <div>
          <Link to="/" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-menu-left" aria-hidden="true"/> Back to search
          </Link>
          <div className={`container-fluid ${style.movieContainer}`}>
            <div className="row">
              <figure className="col-md-6">
                <img className="img-thumbnail" src={backdropPath}/>
              </figure>
              <div className="col-md-6">
                <h2>{details.title}</h2>
                <h5>Genre: {details.genres.map((e,i)=><span key={'genre'+i}>{e.name} </span>)}</h5>
                <h5>Original release date: {details.release_date}</h5>
                <h5>Budget: ${details.budget}</h5>
                <h5>Revenue: ${details.revenue}</h5>
                <a href={details.homepage}>View movie homepage</a>
              </div>
              <h4 className="col-xs-12 col-md-12">{details.tagline}</h4>
              <p className="col-xs-12 col-md-12">
                {details.overview}
              </p>
            </div>
            <div className="row">
              <CastTable id={this.props.id} limit={10} />
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.error) {
      return (
        <div>
          <div className="bg-danger">There was an error while getting the movie information, sorry!</div>
          <Link to="/" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-menu-left" aria-hidden="true"/> Back to search
          </Link>
        </div>
      );
    }
    else {  // if the data is still loading, show a progressbar
      return (
        <div>
          <div className="progress">
            <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: '99%'}}/>
          </div>
          <Link to="/" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-menu-left" aria-hidden="true"/> Back to search
          </Link>
        </div>
      );
    }
  } 
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default MovieDetails;
