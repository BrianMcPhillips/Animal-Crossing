export const getVillagers = () => {
  fetch('https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(json => json.map(villager => ({
      _id: villager._id,
      name: villager.name,
      image: villager.image
    })));
};

export const getVillager = (id) => {
  fetch(`https://cors-anywhere.herokuapp.com/https://ac-vill.herokuapp.com/villagers/${id}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(villager => ({
      _id: villager._id,
      name: villager.name,
      image: villager.image
    }));
};
