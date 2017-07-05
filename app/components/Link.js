import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../utils/img/youtube.png';

function Link(props) {
  console.log(props);
  return (
    <a
      href="#"
      className="logo-link"
      onClick={function(e){
        e.preventDefault();
        props.resetState('React JS');
        props.clearInputField();
      }}
    >
      <img className="logo"
        src={Logo} alt="youtube logo"/>
    </a>
  );
}

Link.propTypes = {
  resetState: PropTypes.func.isRequired,
  clearInputField: PropTypes.func.isRequired
}

export default Link;
