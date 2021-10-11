import React from 'react';
import { render, screen } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers container', () => {
  it('displays a loading screen while loading', () => {
    render(<AllVillagers />);

    screen.getByAltText('Loading');
  });

  it('displays a list of Villagers', () => {
    render(<AllVillagers />);

    const villagerList = screen.getByTestId('villagers');
    expect(villagerList).not.toBeEmptyDOMElement();
  });
});
