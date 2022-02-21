import styled from 'styled-components';

export const EmailInput = styled.input.attrs({
    type: 'email',
    placeholder: 'Email: email@email.com',
})
`
  width: 250px;
  height: 20px;
  padding: 10px;
  border: 1px solid black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  border-radius: 5px; 
  
  &:hover {
    transition: 0.2s;
    transform: scale(1.01);
  } 

  &:not(:hover) {
    border: 1px solid black;
    transition: 0.2s;
    transform: scale(1);
  }
`

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'Senha: ******',
})
`
  width: 250px;
  height: 20px;
  padding: 10px;
  border: 1px solid black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  border-radius: 5px; 

  &:hover {
    transition: 0.2s;
    transform: scale(1.01);
  } 

  &:not(:hover) {
    border: 1px solid black;
    transition: 0.2s;
    transform: scale(1);
  }
`
