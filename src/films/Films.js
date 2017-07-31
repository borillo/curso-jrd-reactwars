export default class Films {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  obtainFilmsTitles() {
    return this.wrapper.find('.film .title').map((film) => film.text());
  }

  obtainFilmsEpisodes() {
    return this.wrapper.find('.film .episode').map((film) => parseInt(film.text(), 10));
  }
}