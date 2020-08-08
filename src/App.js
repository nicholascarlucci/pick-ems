/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StandingsTable from './Components/Table';
import PicksTable from './Components/Picks';
import NavMenu from './Components/NavMenu';
import Teams from './Components/Teams';

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <div style={{ padding: '1em' }} className="container">
              <StandingsTable />
            </div>
          </Route>
          <Route exact path="/picks">
            <div style={{ padding: '1em' }} className="container">
              <PicksTable />
            </div>
          </Route>
          <Route exact path="/teams">
            <div style={{ padding: '1em' }} className="container">
              <Teams />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// step1: create mockups
// step2: start building components (semantic ui)
// step3: add routing/create routes
// step4: setting up server/db (PostgreSQL)
// step5: login/user profile/userdata
// step6: apis integrated to pull relevant data (nfl shield)
