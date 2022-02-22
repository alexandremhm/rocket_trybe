import React from 'react';
import { LoginButton, DisabledButton, ComebackButton } from './style';

function GlobalButton({
  login, disable, children, back, ...rest
}) {
  if (login) {
    return <LoginButton {...rest}>{ children }</LoginButton>;
  } if (back) {
    return <ComebackButton {...rest}>{ children }</ComebackButton>;
  }
  return <DisabledButton {...rest}>{ children }</DisabledButton>;
}

export default GlobalButton;
