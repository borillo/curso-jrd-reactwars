import data from './__mocks__/data.films.json';

export default {
  retrieveFilms() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  }
}