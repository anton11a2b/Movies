import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import { Pagination } from 'antd';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import MovieList from '../moviesList/moviesList';
import Spinner from '../spinner/spinner';
import StringRequestMovies from '../stringRequestMovies/stringRequestMovies';
import MdbapiServices from '../../services/mdbapiServices';
import './app.css';
import icon from './no_image.jpg';

export default class App extends Component {
  mdbapiServices = new MdbapiServices();

  state = {
    error: false,
    total: null,
    searchString: '',
    page: 1,
    errorTitle: 'We did not find any movies for this request.',
  };

  createMovieCard = (id, movieImgSrc, movieName, releaseDate, description) => ({
    id,
    movieImgSrc,
    movieName,
    releaseDate,
    description,
  });

  createMovieList = (movies, isEven) => {
    let newArr = isEven ? movies.slice(10) : movies.slice(0, 10);

    newArr = newArr.map((movie) =>
      this.createMovieCard(
        movie.id,
        `${this.getImgSrc(movie.poster_path)}`,
        movie.original_title,
        `${format(parseISO(movie.release_date), 'MMMM d, yyyy')}`,
        `${this.formatMovieDescription(movie.overview)}`
      )
    );

    this.setState({
      moviesData: newArr,
      loading: false,
      error: false,
    });
  };

  updateSearchString = (text) => {
    const { page } = this.state;

    this.setState({
      searchString: text,
    });

    this.updateMovieList(text, page);
  };

  updatePage = (page) => {
    const { searchString } = this.state;

    this.updateMovieList(searchString, page);
  };

  getImgSrc = (imgName) => {
    if (imgName) {
      return `https://image.tmdb.org/t/p/w200/${imgName}`;
    }

    return icon;
  };

  onError = (error) => {
    if (error.message === 'Failed to fetch') {
      this.setState({
        errorTitle: 'Check your internet connection!',
      });
    } else {
      this.setState({
        errorTitle: 'We did not find any movies for this request.',
      });
    }

    this.setState({
      error: true,
      total: null,
      loading: false,
    });
  };

  updateMovieList = async (query, page) => {
    this.setState({
      error: false,
      loading: true,
    });

    try {
      const newPage = page % 2 === 0 ? page / 2 : (page + 1) / 2;
      const movieList = await this.mdbapiServices.getResources(`&page=${newPage}&query=${query}`);

      this.createMovieList(movieList.results, page % 2 === 0);

      this.setState({
        total: movieList.total_results,
      });
    } catch (error) {
      this.onError(error);
    }
  };

  formatMovieDescription(description) {
    const words = description.split(' ');

    if (words.length > 30) {
      return `${words.slice(0, 30).join(' ')}...`;
    }

    return words.join(' ');
  }

  render() {
    const { moviesData, loading, error, total, page, errorTitle } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator errorTitle={errorTitle} /> : null;
    const content = hasData ? <MovieList moviesData={moviesData} /> : null;
    const pagination = total ? (
      <Pagination
        showSizeChanger={false}
        defaultCurrent={page}
        pageSize={10}
        total={total}
        onChange={(page) => this.updatePage(page)}
      />
    ) : null;

    return (
      <section className="movieApp">
        <StringRequestMovies updateSearchString={this.updateSearchString} />
        {spinner}
        {content}
        {errorMessage}
        <div className="paginator">{pagination}</div>
      </section>
    );
  }
}
