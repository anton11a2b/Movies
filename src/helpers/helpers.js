import { format, parseISO } from 'date-fns';

import MdbapiServices from '../services/mdbapiServices';

import icon from './no_image.jpg';

const mdbapiServices = new MdbapiServices();

export const createMovieCard = (id, rating, average, genresId, movieName, movieImgSrc, releaseDate, description) => ({
  id,
  rating,
  average,
  genresId,
  movieName,
  movieImgSrc,
  releaseDate,
  description,
});

export const getImgSrc = (imgName) => {
  if (imgName) {
    return `https://image.tmdb.org/t/p/w200/${imgName}`;
  }

  return icon;
};

export const formatMovieDescription = (description) => {
  const words = description.split(' ');

  if (words.length > 15) {
    return `${words.slice(0, 15).join(' ')}...`;
  }

  return words.join(' ');
};

export const formatDate = (date) => {
  if (date) {
    return format(parseISO(date), 'MMMM d, yyyy');
  }

  return 'NA';
};

export const createMovieList = (movies, isEven, movieThis, tabName) => {
  let newArr = isEven ? movies.slice(10) : movies.slice(0, 10);

  newArr = newArr.map((movie) =>
    createMovieCard(
      movie.id,
      movie.rating ? movie.rating : 0,
      movie.vote_average,
      movie.genre_ids,
      movie.original_title,
      getImgSrc(movie.poster_path),
      formatDate(movie.release_date),
      formatMovieDescription(movie.overview)
    )
  );

  movieThis.setState({
    [`${tabName}MoviesData`]: newArr,
    [`${tabName}Loading`]: false,
    [`${tabName}Error`]: false,
  });
};

export const onSearchError = (error, movieThis) => {
  if (error.message === 'Failed to fetch') {
    movieThis.setState({
      errorTitle: 'Check your internet connection!',
    });
  } else {
    movieThis.setState({
      errorTitle: 'We did not find any movies for this request.',
    });
  }

  movieThis.setState({
    searchError: true,
    searchTotal: null,
    searchLoading: false,
  });
};

export const onRatedError = (error, movieThis) => {
  if (error.message === 'Failed to fetch') {
    movieThis.setState({
      errorTitle: 'Check your internet connection!',
    });
  } else {
    movieThis.setState({
      errorTitle:
        'We have had some server trouble, and the films you have rated failed to display. Try your luck later.',
    });
  }

  movieThis.setState({
    ratedError: true,
    ratedTotal: null,
    ratedLoading: false,
  });
};

export const updateSearchMovieList = async (query, page, movieThis) => {
  movieThis.setState({
    searchError: false,
    searchLoading: true,
  });

  try {
    const newPage = page % 2 === 0 ? page / 2 : (page + 1) / 2;
    const movieList = await mdbapiServices.getResources(`&page=${newPage}&query=${query}`);

    createMovieList(movieList.results, page % 2 === 0, movieThis, 'search');

    movieThis.setState({
      searchTotal: movieList.total_results,
    });
  } catch (error) {
    onSearchError(error, movieThis);
  }
};

export const updateRatedMovieList = async (page, movieThis) => {
  movieThis.setState({
    ratedError: false,
    ratedLoading: true,
  });

  try {
    const newPage = page % 2 === 0 ? page / 2 : (page + 1) / 2;
    const movieList = await mdbapiServices.getGuestSession(`&page=${newPage}`);

    createMovieList(movieList.results, page % 2 === 0, movieThis, 'rated');

    movieThis.setState({
      ratedTotal: movieList.total_results,
    });
  } catch (error) {
    onRatedError(error, movieThis);
  }
};
