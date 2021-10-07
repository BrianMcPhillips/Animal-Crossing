import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Villager from './Villager';

describe('Villager component', () => {
  afterEach(() => cleanup());
  it('renders a Villager', () => {
    const { asFragment } = render(<Villager 
      name="Test Villager"
      image="http://placeholder.com/villager"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
