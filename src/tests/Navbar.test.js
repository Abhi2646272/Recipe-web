import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it('contains a link to Login page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const loginLink = getByText('Login');
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.getAttribute('href')).toBe('/login');
  });

  it('contains a link to Register page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const registerLink = getByText('Register');
    expect(registerLink).toBeInTheDocument();
    expect(registerLink.getAttribute('href')).toBe('/register');
  });

 
});
