import React from 'react';
import SearchBox from '../../components/search-box';
import style from './style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={`${style.main} container`}> 
        <SearchBox />
      </div>
    );
  }
}

export default HomePage;
