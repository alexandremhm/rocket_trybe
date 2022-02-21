import styled from 'styled-components';

export const LoginButton = styled.button `
  background: #6CC28D;
  border: none;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  height: 40px;
  width: 276px;
  margin-top: 30px;
  outline: none;
  transition: 0.5s;
  opacity: 0.9;

  &:hover {
    transform: scale(1.01);
    transition: 0.2s;
    opacity: 1;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: 0.2s;
  }
`;

export const DisabledButton = styled.button `
  background: #5FE122;
  border: none;
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  height: 40px;
  width: 250px;
  margin-top: 30px;
  outline: none;
  transition: 0.5s;
  opacity: 0.5;
  cursor: not-allowed;
`;

export const ComebackButton = styled.button `
  background: #c4c4c4;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  height: 40px;
  width: 100px;
  margin-top: 30px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    transform: scale(1.01);
    transition: 0.2s;
    opacity: 1;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: 0.2s;
  }
`;