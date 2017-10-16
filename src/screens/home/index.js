import React from 'react';
import style from './style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={style.main}> 
        <h1>MovieDB browser</h1>
      </div>
    );
  }
}

export default HomePage;
