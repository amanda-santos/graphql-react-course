import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
