import React from 'react';
import { render, screen } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers container', () => {
  it('displays a loading screen while loading', () => {
    render(<AllVillagers />);

    screen.getByAltText('Loading');
  });
});
