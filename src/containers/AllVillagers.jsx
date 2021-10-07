import React, { Component } from 'react';
import Loading from '../components/Loading/Loading';
import VillagerList from '../components/VillagerList/VillagerList';

export default class AllVillagers extends Component {
  state = {
    loading: true,
    villagers: []
  }

  componentDidMount = () => {
    fetch('https://ac-vill.herokuapp.com/villagers')
      .then(res => res.json())
      .then(json => json.map(villager => ({
        _id: villager._id,
        name: villager.name,
        image: villager.image
      })))
      .then(villagers => {
        this.setState({ villagers, loading: false });
      });
  }
  render() {
    const { loading, villagers } = this.state;
    if(loading) return <Loading />;
    return (
      <div>
        <VillagerList />
      </div>
    );
  }
}
