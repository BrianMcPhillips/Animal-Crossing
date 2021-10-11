import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import VillagerList from '../../components/VillagerList/VillagerList';
import { getVillagers } from '../../services/animal-crossing';

export default class AllVillagers extends Component {
  state = {
    loading: true,
    villagers: []
  }

  componentDidMount = () => {
    getVillagers()
      .then(villagers => {
        this.setState({ villagers, loading: false });
      });
  }
  render() {
    const { loading, villagers } = this.state;
    if(loading) return <Loading />;
    return (
      <div>
        <VillagerList villagers={villagers}/>
      </div>
    );
  }
}
