import React, { Component } from 'react';

import { 
  Jumbotron,
  Button
} from 'react-bootstrap';

export default class AboutPanel extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>This is ReactWars app!!</h1>        
          <p>A hello world application build on top of React v16.</p>          
          <Button bsStyle="primary">Feel the force!!</Button>
        </Jumbotron>
      </div>
    );
  }
}