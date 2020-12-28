import './App.css';
import 'antd/dist/antd.css';
import Index from './components/group/index';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import AllGroups from './components/group/AllGroups';
import Header from './components/layout/Header';

const App = () => {
  return (
    <Fragment>
      <div className='App'>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/market' component={Header} />
            <Route exact path='/groups' component={AllGroups} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
