import React, { Component } from 'react';
import Villager from '../../components/VillagerList/Villager/Villager';
import Loading from '../../components/Loading/Loading';
import { getVillager } from '../../services/animal-crossing';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {
  state = {
    loading: true,
    villager: null
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
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
      <div data-testid="detail">
        <Villager {...villager}/>
      </div>
    );
  }
}
