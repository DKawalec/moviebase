import React from 'react';
import PropTypes from 'prop-types';
import theMovieDb from '../../lib/themoviedb/themoviedb';
import { API_KEY } from '../../config/moviedb';

const CREW_MEMBERS = ['Director', 'Producer', 'Screenplay', 'Director of Photography', 'Editor'];

class CastTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: null,
      error: null
    };
  }

  componentWillMount() {
    theMovieDb.common.api_key = API_KEY;
  }

  componentDidMount() {
    theMovieDb.movies.getCredits(
      {id: this.props.id},
      success => {
        this.setState({
          error: null,
          credits: JSON.parse(success)
        });
      },
      error => {
        this.setState({
          error: error,
          credits: null
        });
      }
    );
  }

  filterCrew(crew) {
    return crew.filter(e => CREW_MEMBERS.includes(e.job));
  }

  render() {
    if (this.state.credits) {
      let cast = this.state.credits.cast.slice(0,this.props.limit),
        crew = this.filterCrew(this.state.credits.crew);

      return (
        <div className="col-xs-12 col-md-12">
          <h4>Cast</h4>
          <table className="table table-striped">
            <tbody>
            {
              cast.map((e, i) => 
                <tr key={'cast-'+i}>
                  <td>{e.character}</td>
                  <td>{e.name}</td>
                </tr>
              )
            }
            </tbody>
          </table>

          <h4>Crew</h4>
          <table className="table table-striped">
            <tbody>
            {
              crew.map((e, i) => 
                <tr key={'crew-'+i}>
                  <td>{e.job}</td>
                  <td>{e.name}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      );
    }
    else return null;
  } 
}

CastTable.propTypes = {
  id: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired
};

export default CastTable;
