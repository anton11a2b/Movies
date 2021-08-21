/* eslint-disable no-console */

export default class SwapiServices {
  apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=e3fe247be4eaa72ef7d3bce48bf58608&query=return';

  async getResources(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();
    return body;
  }

	async getMovies() {
		const res = await this.getResources(this.apiBase);
		return res.results;
	}
}
