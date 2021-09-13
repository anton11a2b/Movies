export default class MdbapiServices {
  apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=e3fe247be4eaa72ef7d3bce48bf58608';

  async getResources(fragment) {
    const res = await fetch(`${this.apiBase}${fragment}`);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    if (body.results.length === 0) {
      throw new Error();
    }

    return body;
  }
}
