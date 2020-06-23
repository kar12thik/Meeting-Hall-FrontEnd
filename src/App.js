import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Rooms from "./containers/Rooms";
import Customers from "./containers/Customer";
import Home from "./containers/Home";
import { Grid } from "@material-ui/core";

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/Meeting-Hall-FrontEnd/" || location.pathname === "/Meeting-Hall-FrontEnd") {
      history.replace("/");
    }
  }, [])
  console.log(location)
  console.log(history)
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item container >
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
            </Switch>
              <Route path="/rooms">
                <Rooms />
              </Route>
              <Route path="/customers">
                <Customers />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
