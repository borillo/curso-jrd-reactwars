import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { 
  Navbar,
  Nav,
  NavItem,
  MenuItem
} from 'react-bootstrap';

import FilmsPanel from './films';
import AboutPanel from './about';

export default () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">ReactWars</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/films">Films</NavItem>
              <MenuItem eventKey={2} href="/about">About</MenuItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={FilmsPanel}/>
            <Route path="/films" component={FilmsPanel}/>
            <Route path="/about" component={AboutPanel}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
};
