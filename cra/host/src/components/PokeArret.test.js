import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokeArret from '../../../remote/src/Pokemon/component/pokeArret';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

afterEach(() => {
  jest.clearAllMocks();
});

test('PokeArret component renders correctly', async () => {
  render(<PokeArret />);
  expect(screen.getByText('Liste des 10 premiers Pokémon')).toBeInTheDocument();
});

test('PokeArret component fetches and displays Pokemon data correctly', async () => {
  const mockData = {
    results: [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
    ],
  };

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockData),
  });

  render(<PokeArret />);

  await waitFor(() => {
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ivysaur')).toBeInTheDocument();
  });
});
