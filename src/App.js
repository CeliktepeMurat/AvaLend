import "./App.css";
import "antd/dist/antd.css";
import Index from "./components/group/index";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AllGroups from "./components/group/AllGroups";
import MarketPage from "./components/market/MarketPage";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/market" component={MarketPage} />
            <Route exact path="/groups" component={AllGroups} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
