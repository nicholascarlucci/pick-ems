import React from "react";
import "./App.css";
import StandingsTable from "./Components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PicksTable from "./Components/Picks";
import NavMenu from "./Components/NavMenu";

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* default route */}
          <Route exact path="/">
            <div style={{ padding: "1em" }} className="container">
              <StandingsTable />
            </div>
          </Route>
          <Route exact path="/picks">
            <div style={{ padding: "1em" }} className="container">
              <PicksTable />
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
