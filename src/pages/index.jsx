import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Hero from "./Hero";
import Home from "./Home";

import View from "../layout/View";
import About from "./About/Abaut";
import Contact from "./Contact/Contact";
import Help from "./Help/Help";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <View>
        <Switch>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </View>
    </BrowserRouter>
  );
};

export default RouterApp;
