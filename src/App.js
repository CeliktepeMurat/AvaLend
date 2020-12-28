import './App.css';
import 'antd/dist/antd.css';
import Index from './components/group/index';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Market from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

const App = () => {
  return (
    <Fragment>
      <div className='App'>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/market' component={Market} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/groups' component={Index} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
