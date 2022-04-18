import "./App.css";
import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" render={() => <Home />} />
      
      </Switch>
    </HashRouter>
  );
}

export default App;
