import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage container', () => {
  it('displays a loading screen while loading', () => {
    render(<DetailPage />);

    screen.getByAltText('Loading');
  });

  it('displays a list of Villagers', () => {
    render(<DetailPage />);

    const villagerList = screen.getByTestId('allVillagers');
    expect(villagerList).not.toBeEmptyDOMElement();
  });
});
