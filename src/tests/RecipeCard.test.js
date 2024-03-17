import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';

describe('RecipeCard component', () => {
  const mockRecipe = {
    title: 'Test Recipe',
    image: 'test.jpg',
    ingredients: [{ text: 'Ingredient 1' }, { text: 'Ingredient 2' }],
    details: 'https://example.com',
  };

  it('renders recipe title', () => {
    render(<RecipeCard {...mockRecipe} />);
    const titleElement = screen.getByText('Test Recipe');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders recipe image', () => {
    render(<RecipeCard {...mockRecipe} />);
    const imageElement = screen.getByAltText('Test Recipe');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test.jpg');
  });

  it('renders ingredients list', () => {
    render(<RecipeCard {...mockRecipe} />);
    const ingredient1Element = screen.getByText('Ingredient 1');
    const ingredient2Element = screen.getByText('Ingredient 2');
    expect(ingredient1Element).toBeInTheDocument();
    expect(ingredient2Element).toBeInTheDocument();
  });

  it('renders details link with correct href', () => {
    render(<RecipeCard {...mockRecipe} />);
    const detailsLinkElement = screen.getByText('Details');
    expect(detailsLinkElement).toBeInTheDocument();
    expect(detailsLinkElement).toHaveAttribute('href', 'https://example.com');
    expect(detailsLinkElement).toHaveAttribute('target', '_blank');
    expect(detailsLinkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render when ingredients are not provided', () => {
    const { container } = render(<RecipeCard title="Test Recipe" />);
    expect(container.firstChild).toBeNull();
  });
});
