import React from "react";
import Home from "./Home/index";
import Disease from "./Disease/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/disease" exact component={Disease} />
          {/* 
          <Route path="/doctors" exact component={} />
          <Route path="/specialists" exact component={} />
          <Route path="/profile" exact component={} />
          <Route path="*" exact component={} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routing;
