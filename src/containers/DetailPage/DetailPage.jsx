import React, { Component } from 'react';
import Villager from '../../components/VillagerList/Villager/Villager';
import Loading from '../../components/Loading/Loading';
import { getVillager } from '../../services/animal-crossing';

export default class DetailPage extends Component {
  state = {
    loading: true,
    villager: null
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    getVillager(id)
      .then(villager => this.setState({ villager, loading: false }));
  }
  render() {
    const { loading, villager } = this.state;
    if(loading) return <Loading />;
    return (
      <Villager {...villager}/>
    );
  }
}
