import React from 'react';
import PropTypes from 'prop-types';
import { LoginButton, DisabledButton, ComebackButton } from './style';

function GlobalButton({ login, disable, children, back, ...rest }) {
  if (login) {
    return <LoginButton { ...rest }>{ children }</LoginButton>;
  } else if (back) {
    return <ComebackButton { ...rest }>{ children }</ComebackButton>;
  }
  return <DisabledButton { ...rest }>{ children }</DisabledButton>;
}

// Proptypes
GlobalButton.propTypes = {
  login: PropTypes.bool,
  disable: PropTypes.bool,
  children: PropTypes.string,
};

export default GlobalButton;
