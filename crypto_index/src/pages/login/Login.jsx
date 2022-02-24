/* eslint-disable react/no-children-prop */
/* eslint consistent-return: "error" */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createContext } from 'react';
import * as S from './style';
import GlobalButton from '../../components/subcomponents/button/index';
import { PasswordInput, EmailInput } from '../../components/subcomponents/input/style';
import { schema } from '../../validators/login';
import handleLogin from '../../services/login';

function Login() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRedirect = async () => {
    try {
      const { token } = await handleLogin({ email, password });
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsePassword = parseInt(password, 10);
    schema.validate({ password: parsePassword, email })
      .then(() => { handleRedirect(); })
      .catch(() => { setErrorMessage((state) => !state); });
  };

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
        { errorMessage && <span>Dados inválidos, tente novamente!</span> }
        <GlobalButton
          login
          children="Entrar"
          onClick={(e) => handleSubmit(e)}
        />
      </S.LoginBox>
    </S.Container>
  );
}

export default Login;
