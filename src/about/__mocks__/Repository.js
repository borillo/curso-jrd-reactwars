import data from './fixtures.json';

export default {
  retrieveAbout() {
    return Promise.resolve(data);
  }
}