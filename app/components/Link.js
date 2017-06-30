import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../utils/img/youtube.png';

function Link(props) {
  return (
    <a
      href="#"
      className="logo-link"
      onClick={function(e){
        e.preventDefault();
        props.resetState('React JS');
      }}
    >
      <img className="logo"
        src={Logo} alt="youtube logo"/>
    </a>
  );
}

Link.propTypes = {
  resetState: PropTypes.func.isRequired
}

export default Link;
