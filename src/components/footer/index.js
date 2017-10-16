import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Footer = ({text}) => {
  return (
    <div className={`${style.footer} bg-info`}>
      {text}
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string
};

export default Footer;
