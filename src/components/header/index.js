import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Header = () => {
  return (
    <div className={`jumbotron jumbotron-fluid ${style.bgLogo}`}>
      <div className="container">
        <h1 className="display-3">MovieDB browser</h1>
        <p className="lead">Use the search function below to browse results from MovieDB database.</p>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
