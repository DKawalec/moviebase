import React from 'react';
import theMovieDb from '../../lib/themoviedb/themoviedb';
import { API_KEY, MIN_QUERY_LENGTH } from '../../config/moviedb';
import SearchBox from '../search-box';
import MovieDisplay from '../movie-display';
import style from './style.scss';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentResults: [],
      currentError: null
    };

    // bind event handler so that it can access this.state
    this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
  }

  componentWillMount() {
    theMovieDb.common.api_key = API_KEY;  
  }
  
  onSearchBoxChange(evt) {
    let value = evt.target.value;
    // only run search if the user already typed several letters
    if (value.length >= MIN_QUERY_LENGTH) {
      theMovieDb.search.getMovie(
        {'query': value},
        success => {
          let response = JSON.parse(success);
          this.setState({
            currentError: null,
            currentResults: response.results
          });
        },
        error => {
          this.setState({
            currentError: error,
            currentResults: []
          });
        }
      );
    }
  }

  render() {
    let results = this.state.currentResults;
    
    return (
      <div>
        <SearchBox onChange={this.onSearchBoxChange}/>
        { results.length
          ? results.map(
            (e, i) => <MovieDisplay
                key={'movie-'+i}
                id={e.id}
                title={e.title}
                release={e.release_date}
                poster={e.poster_path}
                overview={e.overview}
              />
            )
          : <div className="center-block">
              <h3> Nothing to show here... Get searching! </h3>
            </div>
          }
        { this.state.currentError
          ? <div className={`bg-danger ${style.box}`}>An error occured.</div>
          : null
        }
      </div>
    );
  } 
}

export default MovieSearch;
