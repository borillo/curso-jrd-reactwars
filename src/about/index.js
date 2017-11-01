import React, { Component } from 'react';

import { 
  Jumbotron,
  Button
} from 'react-bootstrap';

import repository from './Repository';

export default class AboutPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: []
    };
  }

  componentWillMount() {
    repository.retrieveAbout()
      .then(({teachers}) => {
        console.log(teachers);
        this.setState({ teachers });
      });  
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>This is ReactWars app!!</h1>        
          <p>A hello world application build on top of React v16. Meet the team:</p>

          <ul className="teachers">
            {
              this.state.teachers.map((teacher) => {
                return (
                  <li>{teacher}</li>
                );
              })
            }
          </ul>

          <Button bsStyle="primary">Feel the force!!</Button>
        </Jumbotron>
      </div>
    );
  }
}