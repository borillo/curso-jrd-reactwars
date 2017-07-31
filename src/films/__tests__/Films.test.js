jest.mock('../FilmsRepository');

import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';

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
  it('should be listed', () => {   
    const wrapper = mount(<App />);

    setImmediate(() => {
      expect(wrapper.find('.film')).toHaveLength(NUMBER_OF_FILMS);   
    });
  });

  it('should show name and episode number', () => {
    const wrapper = mount(<App />);

    setImmediate(() => {
      const filmsTitles = wrapper.find('.film .title').map((film) => film.text());
      const filmsEpisode = wrapper.find('.film .episode').map((film) => parseInt(film.text(), 10));

      expect(filmsTitles).toEqual(FILM_TITLES);
      expect(filmsEpisode).toEqual(FILM_EPISODES);
    });    
  })

  it('should be ordered by episode number', () => {
    const wrapper = mount(<App />);

    setImmediate(() => {
      const filmsEpisode = wrapper.find('.film .episode').map((film) => parseInt(film.text(), 10));

      filmsEpisode.forEach((episode, index) => {
        expect(episode).toEqual(index + 1);
      });
    });    
  })
});
