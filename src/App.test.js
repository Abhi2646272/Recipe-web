import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders Login component by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const loginElement = screen.getByText(/Login/i);
    expect(loginElement).toBeInTheDocument();
  });

  it('navigates to Login component when the route is /login', () => {
    render(
      <BrowserRouter initialEntries={['/login']}>
        <App />
      </BrowserRouter>
    );
    const loginElement = screen.getByText(/Login/i);
    expect(loginElement).toBeInTheDocument();
  });

  
});
