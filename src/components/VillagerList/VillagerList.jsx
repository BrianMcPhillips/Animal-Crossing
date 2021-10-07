import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager/Villager';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <li key={villager._id}>
      <Villager name={villager.name} image={villager.image} /> 
    </li>
  ));
  return (
    <ul>
      {villagerElements}
    </ul>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired,
};

export default VillagerList;
