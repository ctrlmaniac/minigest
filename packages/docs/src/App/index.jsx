import React from "react";
import { Switch, Route } from "react-router-dom";

// Routes
import { Home } from "./Home";
import { Installazione } from "./Installazione";
import { Utilizzo } from "./Utilizzo";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/installazione" component={Installazione} />
      <Route path="/utilizzo" component={Utilizzo} />
    </Switch>
  );
}
