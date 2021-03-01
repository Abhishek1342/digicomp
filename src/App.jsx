import React from "react";
import Home from "./Home/index";
import Disease from "./Disease/index";
import Doctor from "./Doctor/index";
import Specialists from "./Specialists/index";
import Error from "./error";
import Terms from "./Terms-Policies/terms";
import Policies from "./Terms-Policies/policy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HowToUse from "./How to Use/how";
import Contactus from "./Contact us/contactus";
import Details from "./Doctors profile/detail-card";

const Routing = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diseases" exact component={Disease} />
          <Route path="/doctors" exact component={Doctor} />
          <Route path="/specialists" exact component={Specialists} />
          <Route path="/terms of use" exact component={Terms} />
          <Route path="/privacy policy" exact component={Policies} />
          <Route path="/how to use" exact component={HowToUse} />
          <Route path="/contact us" exact component={Contactus} />
          <Route path="/details" exact component={Details} />

          {/* 
          
          <Route path="/profile" exact component={} />
          */}
          <Route path="*" exact component={Error} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routing;
