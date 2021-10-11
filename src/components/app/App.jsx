import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers/AllVillagers';
import DetailPage from '../../containers/DetailPage/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllVillagers}/>
        <Route exact path="/detail/:id" component={DetailPage}/>
      </Switch>
    </Router>
  );
}
