import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import FilmsPanel from './films';

export default () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={FilmsPanel}/>
            <Route path="/films" component={FilmsPanel}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
};
