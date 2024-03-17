import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Recipe from '../components/Recipe';

describe('Recipe component', () => {
  it('renders the search form', () => {
    render(
      <BrowserRouter>
        <Recipe />
      </BrowserRouter>
    );
    const searchFormElement = screen.getByPlaceholderText(/Search for recipes.../i);
    expect(searchFormElement).toBeInTheDocument();
  });

  it('renders loading message while fetching recipes', async () => {
    render(
      <BrowserRouter>
        <Recipe />
      </BrowserRouter>
    );
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    // Simulate API call completion
    await waitFor(() => expect(loadingElement).not.toBeInTheDocument());
  });

 });
