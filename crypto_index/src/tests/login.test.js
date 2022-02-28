/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
// import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Login', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render the login page', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('should be possible to make login', async () => {
    const { getByTestId } = render(<App />);
    const email = getByTestId('email-input');
    expect(email).toBeInTheDocument();

    const password = getByTestId('password-input');
    expect(password).toBeInTheDocument();

    const button = getByTestId('login-button');
    expect(button).toBeInTheDocument();

    fireEvent.change(email, { target: { value: 'trybe@gmail.com' } });
    expect(email.value).toBe('trybe@gmail.com');

    fireEvent.change(password, { target: { value: '123456' } });
    expect(password.value).toBe('123456');

    fireEvent.click(button);

    // verify if login was made
    const response = await axios.post('http://localhost:4000/api/login', {
      email: 'trybe@gmail.com',
      password: '123456',
    });

    expect(response.data.token).toBeDefined();

    // verify if exists a token on localStorage
    localStorage.getItem('token');
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should\'nd be possible to make login with wrong credentials', () => {
    const { getByTestId } = render(<App />);
    const email = getByTestId('email-input');
    const password = getByTestId('password-input');
    const button = getByTestId('login-button');
    fireEvent.change(email, { target: { value: 'alexandre@.com' } });
    fireEvent.change(password, { target: { value: '12345' } });
    fireEvent.click(button);
  });
});
