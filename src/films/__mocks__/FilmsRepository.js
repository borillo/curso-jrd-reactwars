import data from './data.films.json';

export default {
  retrieveFilms() {
    return Promise.resolve(data);
  }
}