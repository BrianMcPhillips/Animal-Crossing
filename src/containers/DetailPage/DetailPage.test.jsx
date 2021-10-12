import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
import { getVillager } from '../../services/animal-crossing';

jest.mock('../../services/animal-crossing');

describe('DetailPage container', () => {
  it('displays a loading screen while loading', () => {
    getVillager.mockResolvedValue([
      {
        _id: '1234',
        name: 'Test Villager',
        image: 'http://placeholder.com/villager'
      }
    ]);
    render(<DetailPage />);

    screen.getByAltText('Loading');
  });

  it('displays detail page of one villager', async() => {
    getVillager.mockResolvedValue([
      {
        _id: '1234',
        name: 'Test Villager',
        image: 'http://placeholder.com/villager'
      }
    ]);
    render(<DetailPage />);

    const detail = await screen.findByTestId('detail');
    expect(detail).not.toBeEmptyDOMElement();
  });
});
