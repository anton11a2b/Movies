import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import MovieList from '../moviesList/moviesList';
import SwapiServices from '../../services/swapiServices';
import './app.css';

export default class App extends Component {
  swapiServices = new SwapiServices();

  constructor() {
    super();
    this.createMovieList();
  }

  state = {};

  createMovieCard(id, movieImgSrc, movieName, releaseDate, description) {
    return {
      id,
      movieImgSrc,
      movieName,
      releaseDate,
      description,
    };
  }

  createMovieList() {
    this.swapiServices.getMovies().then((movies) => {
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
      });
    });
  }

	formatMovieDescription(description) {
		const words = description.split(' ');

		if (words.length > 35) {
			return `${words.slice(0, 35).join(' ')}...`;
		}

		return words.join(' ');
	}

  render() {
    const { moviesData } = this.state;

    return (
      <section className="movieApp">
        <MovieList moviesData={moviesData} />
      </section>
    );
  }
}
