import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import MovieList from '../moviesList/moviesList';
import Spinner from '../spinner/spinner';
import SwapiServices from '../../services/swapiServices';
import './app.css';

/* eslint-disable no-console */

export default class App extends Component {
  swapiServices = new SwapiServices();

  constructor() {
    super();
    this.updateMovieCard('return');
  }

  state = {
    loading: false,
    error: false,
  };

  createMovieCard = (id, movieImgSrc, movieName, releaseDate, description) => ({
    id,
    movieImgSrc,
    movieName,
    releaseDate,
    description,
  });

  createMovieList = (movies) => {
    const newArr = movies.map((movie) =>
      this.createMovieCard(
        movie.id,
        `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
        movie.original_title,
        `${format(parseISO(movie.release_date), 'MMMM d, yyyy')}`,
        `${this.formatMovieDescription(movie.overview)}`
      )
    );

    this.setState({
      moviesData: newArr,
      loading: false,
    });
  };

  onError = (error) => {
    console.log(error.message);

    this.setState({
      error: true,
      loading: false,
    });
  };

  updateMovieCard(path) {
    this.swapiServices.getMovies(`&query=${path}`).then(this.createMovieList).catch(this.onError);
  }

  formatMovieDescription(description) {
    const words = description.split(' ');

    if (words.length > 35) {
      return `${words.slice(0, 35).join(' ')}...`;
    }

    return words.join(' ');
  }

  render() {
    const { moviesData, loading, error } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? <MovieList moviesData={moviesData} loading={loading} /> : null;

    return (
      <section className="movieApp">
        {spinner}
        {content}
        {errorMessage}
      </section>
    );
  }
}
