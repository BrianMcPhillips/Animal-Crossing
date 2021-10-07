import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerList from './VillagerList';

describe('VillagerList component', () => {
  afterEach(() => cleanup());
  it('renders a Villager List', () => {
    const { asFragment } = render(<VillagerList 
      villagers={[
        { 
          _id: '1234', 
          name: 'MyVillager', 
          imageUrl: 'http://placeholder.com/villager' 
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
