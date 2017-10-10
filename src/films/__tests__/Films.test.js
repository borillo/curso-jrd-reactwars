jest.mock('../Repository');

import React from 'react';
import { mount } from 'enzyme';

import App from '../../App';
import Films from '../Films';

const FILM_TITLES = [
  'The Phantom Menace', 
  'Attack of the Clones', 
  'Revenge of the Sith', 
  'A New Hope', 
  'The Empire Strikes Back', 
  'Return of the Jedi', 
  'The Force Awakens'
];

const FILM_EPISODES = FILM_TITLES.map((title, index) => index+1);
const NUMBER_OF_FILMS = FILM_TITLES.length;

describe('Films', () => {
  let wrapper;
  let films;

  beforeEach(() => {
    wrapper = mount(<App />);
    films = new Films(wrapper);
  });

  it('should be listed', async () => {
    expect(films.obtainFilms()).toHaveLength(NUMBER_OF_FILMS);   
  });

  it('should show name and episode number', async () => {
    const filmsTitles = films.obtainFilmsTitles();
    expect(filmsTitles).toEqual(FILM_TITLES);

    const filmsEpisodes = films.obtainFilmsEpisodes();
    expect(filmsEpisodes).toEqual(FILM_EPISODES);
  });

  it('should be ordered by episode number', async () => {
    films.obtainFilmsEpisodes().forEach((episode, index) => {
      expect(episode).toEqual(index + 1);
    });
  });
});
