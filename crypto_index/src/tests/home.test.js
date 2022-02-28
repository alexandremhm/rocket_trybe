/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Home from '../pages/home/Home';
// import userEvent from '@testing-library/user-event';

describe('Home', () => {
  // render the page home

  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: () => ({
        pathname: 'localhost:3000/login',
      }),
    }));
  });

  it('should render the home page', () => {
    renderWithRouter(<Home />);
    screen.debug();
    // const updateButton = getByTestId('update-button');
    // expect(updateButton).toBeInTheDocument();
  });
});
