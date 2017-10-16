import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({onChange}) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-addon"> 
          <span className="glyphicon glyphicon-search" aria-hidden="true"/>
        </div>
        <input
          type="text"
          name="phrase"
          onChange={onChange}
          placeholder="Enter your search term"
          className="form-control"
          autoFocus
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func
};

export default SearchBox;
