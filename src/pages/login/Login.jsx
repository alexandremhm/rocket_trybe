import React from 'react';
// import { createContext } from 'react';
import * as S from './style.js';
import GlobalButton from '../../components/subcomponents/button/index.js';


function Login () {

  return (
    <S.Container>
      <S.LoginBox>
        <S.Title>Login</S.Title>
        <S.ButtonContainer>
          <GlobalButton 
            login 
            children="Entrar"
          />       
        </S.ButtonContainer>
      </ S.LoginBox>
    </S.Container>
  )
}

export default Login;
