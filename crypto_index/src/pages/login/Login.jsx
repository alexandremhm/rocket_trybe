/* eslint-disable react/no-children-prop */
/* eslint consistent-return: "error" */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as S from './style';
import GlobalButton from '../../components/subcomponents/button/index';
import { PasswordInput, EmailInput } from '../../components/subcomponents/input/style';
import { schema } from '../../validators/login';
import handleLogin from '../../services/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRedirect = async () => {
    try {
      const { token } = await handleLogin({ email, password });
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsePassword = parseInt(password, 10);
    schema.validate({ password: parsePassword, email })
      .then(() => { handleRedirect(); })
      .catch(() => { toast.error('Login failed! Digite as credenciais corretas.'); });
  };

  return (
    <S.Container>
      <ToastContainer />
      <S.LoginBox>
        <S.Title>Login</S.Title>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email-input"
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password-input"
        />
        <GlobalButton
          login
          children="Entrar"
          onClick={(e) => handleSubmit(e)}
          data-testid="login-button"
        />
      </S.LoginBox>
    </S.Container>
  );
}

export default Login;
