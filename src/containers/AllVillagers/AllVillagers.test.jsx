import React from 'react';
import { render, screen } from '@testing-library/react';
import AllVillagers from './AllVillagers';
import { getVillagers } from '../../services/animal-crossing';

jest.mock('../../services/animal-crossing');

describe('AllVillagers container', () => {
  it('displays a loading screen while loading', () => {
    getVillagers.mockResolvedValue([
      {
        _id: '1234',
        name: 'Test Villager',
        image: 'http://placeholder.com/villager'
      },
      {
        _id: '2468',
        name: 'Testy Test',
        image: 'http://placeholder.com/villager'
      }
    ]);
    render(<AllVillagers />);

    screen.getByAltText('Loading');
  });

  it('displays a list of Villagers', async() => {
    getVillagers.mockResolvedValue([
      {
        _id: '1234',
        name: 'Test Villager',
        image: 'http://placeholder.com/villager'
      },
      {
        _id: '2468',
        name: 'Testy Test',
        image: 'http://placeholder.com/villager'
      }
    ]);
    render(<AllVillagers />);

    const villagerList = await screen.findByTestId('allVillagers');
    expect(villagerList).not.toBeEmptyDOMElement();
  });
});
