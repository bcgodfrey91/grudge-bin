import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Jackal from './components/Jackal';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/jackals/:id' component={Jackal} />
    </Route>
  </Router>
)

export default Routes
