export default class MdbapiServices {
  async getResources(fragment) {
    const apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=e3fe247be4eaa72ef7d3bce48bf58608';
    const res = await fetch(`${apiBase}${fragment}`);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    if (body.results.length === 0) {
      throw new Error();
    }

    return body;
  }

  async getGenres() {
    const apiGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e3fe247be4eaa72ef7d3bce48bf58608';
    const res = await fetch(apiGenres);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    return body.genres;
  }

  async сreateGuestSession() {
    const sessionId = localStorage.getItem('sessionId');

    if (!sessionId) {
      const apiAuthentication =
        'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e3fe247be4eaa72ef7d3bce48bf58608';
      const authentication = await fetch(apiAuthentication);

      if (!authentication.ok) {
        throw new Error();
      }

      const guestSession = await authentication.json();

      localStorage.setItem('sessionId', guestSession.guest_session_id);
    }
  }

  async getGuestSession(fragment) {
    const guestSessionId = localStorage.getItem('sessionId');

    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=e3fe247be4eaa72ef7d3bce48bf58608${fragment}`
    );

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    return body;
  }

  rateMovie(movieId, rating) {
    const guestSessionId = localStorage.getItem('sessionId');

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=e3fe247be4eaa72ef7d3bce48bf58608&guest_session_id=${guestSessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          value: rating,
        }),
      }
    );
  }
}
