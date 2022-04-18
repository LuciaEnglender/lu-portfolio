import "./App.css";
import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Home />} />
        <Route path="/thanks" render={() => <ThankYou />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
