import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { createContext } from 'react';
import * as S from './style.js';
import GlobalButton from '../../components/subcomponents/button/index.js';
import { PasswordInput, EmailInput } from '../../components/subcomponents/input/style.js';
import { schema } from '../../validators/login';

function Login () {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [password, setPassword] = useState('');

  const history = useHistory() 

  const handleRedirect = () => {
    history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      schema.validate({ email, password})
      .then(function () {handleRedirect()})
      .catch(function (error) {setErrorMessage((state) => !state )})
  }


  return (
        <S.Container>
          <S.LoginBox>
            <S.Title>Login</S.Title>
              <EmailInput 
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordInput 
                onChange={(e) => setPassword(e.target.value)}
              />
                {
                  errorMessage && <span>Dados inválidos, tente novamente!</span>
                }
              <GlobalButton 
                login 
                children="Entrar"
                onClick={(e) => handleSubmit(e)}
              />
          </ S.LoginBox>
        </S.Container>
  )
}

export default Login;
