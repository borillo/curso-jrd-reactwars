import React, { Component } from 'react';

import FilmsRepository from './FilmsRepository';

export default class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentWillMount() {
    FilmsRepository.retrieveFilms()
      .then((response) => {
        this.setState({
          films: response.results
        });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.films.map((film) => {
            return (
              <div className="film" key={film.episode_id}>
                {film.title}
              </div>
            );
          })
        }
      </div>
    );
  }
}