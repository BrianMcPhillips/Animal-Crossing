import React from 'react';
import PropTypes from 'prop-types';
import styles from './Villager.module.css';

const Villager = ({ name, image }) => (
  <figure className={styles.Villager}>
    <img src={image} alt={name} />
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Villager;
