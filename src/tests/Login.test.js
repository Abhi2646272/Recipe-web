import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

describe('Login component', () => {
  it('should render login form with email and password fields', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should update email and password state on input change', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(emailInput.value).toBe('test@gmail.com');
      expect(passwordInput.value).toBe('password123');
    });
  });

  it('should navigate to dashboard when login credentials are correct', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    fireEvent.click(submitButton);

     await waitFor(() => {
      expect(window.location.pathname).toBe('/recipe');
    });
  });
});
