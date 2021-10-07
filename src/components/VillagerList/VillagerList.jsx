import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager/Villager';
import styles from './VillagerList.module.css';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => (
    <li key={villager._id}>
      <Villager {...villager} /> 
    </li>
  ));
  return (
    <ul data-testid="villagers" className={styles.VillagerList}>
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
