export const getVillagers = () => {
  fetch('https://ac-vill.herokuapp.com/villagers')
    .then(res => res.json())
    .then(json => json.map(villager => ({
      _id: villager._id,
      name: villager.name,
      image: villager.image
    })));
};

export const getVillager = (id) => {
  fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then(res => res.json())
    .then(villager => ({
      _id: villager._id,
      name: villager.name,
      image: villager.image
    }));
};
