jest.mock('../Repository');

import React from 'react';
import { mount } from 'enzyme';

import App from '../../App';
import Films from '../Films';

describe('About', () => {
  let wrapper;
  let films;

  beforeEach(async () => {
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
      expect(episode).toEqual(`Episode ${index + 1}`);
    });
  });

  it('should match snapshot', async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
