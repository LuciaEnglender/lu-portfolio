import "./App.css";
import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ThankYou from "./components/ThankYou";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" render={() => <Home />} />
        <Route path="/thanks" render={() => <ThankYou />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
