import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import About from './components/pages/About';
import Feature from './components/pages/Feature';
import Pricing from './components/pages/Pricing';

const app = document.getElementById('app');
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/about" component={About} />
      <Route exact path="/feature" component={Feature} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/pricing/:harga" component={Pricing} />
    </Switch>
  </HashRouter>, 
app);
