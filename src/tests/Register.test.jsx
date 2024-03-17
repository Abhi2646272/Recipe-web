import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Register from '../components/Register';

describe('Register component', () => {
  it('should render register form with all required fields', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const firstNameInput = getByLabelText('First name');
    const lastNameInput = getByLabelText('Last name');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it('should navigate to login page when register button is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const registerButton = getByText('Register');

    fireEvent.click(registerButton);

    // Wait for navigation to login page
    await waitFor(() => {
      expect(window.location.pathname).toBe('/login');
    });
  });

  it('should navigate to login page when "Login" link is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/register']}>
        <Register />
      </MemoryRouter>
    );

    const loginLink = getByText('Login');

    fireEvent.click(loginLink);

     await waitFor(() => {
      expect(window.location.pathname).toBe('/login');
    });
  });
});
