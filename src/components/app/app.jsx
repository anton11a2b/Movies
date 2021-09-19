import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import { Pagination, Tabs } from 'antd';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import MovieList from '../moviesList/moviesList';
import Spinner from '../spinner/spinner';
import StringRequestMovies from '../stringRequestMovies/stringRequestMovies';
import MdbapiServices from '../../services/mdbapiServices';
import { MdbapiServiceProvider } from '../mdbApi-service-context/mdbApi-service-context';
import './app.css';
import icon from './no_image.jpg';

export default class App extends Component {
  mdbapiServices = new MdbapiServices();

  state = {
    ratedPage: 1,
    searchPage: 1,
    searchString: '',
    ratedTotal: null,
    searchTotal: null,
    ratedError: false,
    searchError: false,
    ratedLoading: false,
    searchLoading: false,
    errorTitle: 'We did not find any movies for this request.',
  };

  componentDidMount() {
    this.mdbapiServices.сreateGuestSession();
  }

  createMovieCard = (id, movieImgSrc, movieName, releaseDate, description, average, genresId, rating = 0) => ({
    id,
    movieImgSrc,
    movieName,
    releaseDate,
    description,
    average,
    genresId,
    rating,
  });

  createSearchMovieList = (movies, isEven) => {
    let newArr = isEven ? movies.slice(10) : movies.slice(0, 10);

    newArr = newArr.map((movie) =>
      this.createMovieCard(
        movie.id,
        this.getImgSrc(movie.poster_path),
        movie.original_title,
        this.formatDate(movie.release_date),
        this.formatMovieDescription(movie.overview),
        movie.vote_average,
        movie.genre_ids
      )
    );

    this.setState({
      searchMoviesData: newArr,
      searchLoading: false,
      searchError: false,
    });
  };

  createRatedMovieList = (movies, isEven) => {
    let newArr = isEven ? movies.slice(10) : movies.slice(0, 10);

    newArr = newArr.map((movie) =>
      this.createMovieCard(
        movie.id,
        this.getImgSrc(movie.poster_path),
        movie.original_title,
        this.formatDate(movie.release_date),
        this.formatMovieDescription(movie.overview),
        movie.vote_average,
        movie.genre_ids,
        movie.rating
      )
    );

    this.setState({
      ratedMoviesData: newArr,
      ratedLoading: false,
      ratedError: false,
    });
  };

  updateSearchString = (text) => {
    const { searchPage } = this.state;

    this.setState({
      searchString: text,
    });

    this.updateSearchMovieList(text, searchPage);
  };

  updateSearchPage = (page) => {
    const { searchString } = this.state;

    this.updateSearchMovieList(searchString, page);
  };

  updateRatedPage = (page) => {
    this.setState({
      ratedPage: page,
    });

    this.updateRatedMovieList(page);
  };

  getImgSrc = (imgName) => {
    if (imgName) {
      return `https://image.tmdb.org/t/p/w200/${imgName}`;
    }

    return icon;
  };

  onSearchError = (error) => {
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
      searchError: true,
      searchTotal: null,
      searchLoading: false,
    });
  };

  onRatedError = (error) => {
    if (error.message === 'Failed to fetch') {
      this.setState({
        errorTitle: 'Check your internet connection!',
      });
    } else {
      this.setState({
        errorTitle:
          'We have had some server trouble, and the films you have rated failed to display. Try your luck later.',
      });
    }

    this.setState({
      ratedError: true,
      ratedTotal: null,
      ratedLoading: false,
    });
  };

  callback = (activeKey) => {
    const { ratedPage } = this.state;

    if (activeKey === '2') {
      this.updateRatedMovieList(ratedPage);
    }
  };

  updateSearchMovieList = async (query, page) => {
    this.setState({
      searchError: false,
      searchLoading: true,
    });

    try {
      const newPage = page % 2 === 0 ? page / 2 : (page + 1) / 2;
      const movieList = await this.mdbapiServices.getResources(`&page=${newPage}&query=${query}`);

      this.createSearchMovieList(movieList.results, page % 2 === 0);

      this.setState({
        searchTotal: movieList.total_results,
      });
    } catch (error) {
      this.onSearchError(error);
    }
  };

  updateRatedMovieList = async (page) => {
    this.setState({
      ratedError: false,
      ratedLoading: true,
    });

    try {
      const newPage = page % 2 === 0 ? page / 2 : (page + 1) / 2;
      const movieList = await this.mdbapiServices.getGuestSession(`&page=${newPage}`);

      this.createRatedMovieList(movieList.results, page % 2 === 0);

      this.setState({
        ratedTotal: movieList.total_results,
      });
    } catch (error) {
      this.onRatedError(error);
    }
  };

  formatMovieDescription(description) {
    const words = description.split(' ');

    if (words.length > 15) {
      return `${words.slice(0, 15).join(' ')}...`;
    }

    return words.join(' ');
  }

  formatDate(date) {
    if (date) {
      return format(parseISO(date), 'MMMM d, yyyy');
    }

    return 'NA';
  }

  render() {
    const {
      ratedPage,
      errorTitle,
      searchPage,
      ratedTotal,
      ratedError,
      searchError,
      searchTotal,
      ratedLoading,
      searchLoading,
      ratedMoviesData,
      searchMoviesData,
    } = this.state;
    const { TabPane } = Tabs;
    const hasRatedData = !(ratedLoading || ratedError);
    const hasSearchData = !(searchLoading || searchError);
    const ratedSpinner = ratedLoading ? <Spinner /> : null;
    const searchSpinner = searchLoading ? <Spinner /> : null;
    const searchErrorMessage = searchError ? <ErrorIndicator errorTitle={errorTitle} /> : null;
    const ratedErrorMessage = ratedError ? <ErrorIndicator errorTitle={errorTitle} /> : null;
    const ratedContent = hasRatedData ? <MovieList moviesData={ratedMoviesData} /> : null;
    const searchContent = hasSearchData ? <MovieList moviesData={searchMoviesData} /> : null;
    const searchPagination = searchTotal ? (
      <Pagination
        showSizeChanger={false}
        defaultCurrent={searchPage}
        pageSize={10}
        total={searchTotal}
        onChange={this.updateSearchPage}
      />
    ) : null;
    const ratedPagination = ratedTotal ? (
      <Pagination
        showSizeChanger={false}
        defaultCurrent={ratedPage}
        pageSize={10}
        total={ratedTotal}
        onChange={this.updateRatedPage}
      />
    ) : null;

    return (
      <section className="movieApp">
        <MdbapiServiceProvider value={this.mdbapiServices}>
          <Tabs centered defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Search" key="1">
              <StringRequestMovies updateSearchString={this.updateSearchString} />
              {searchSpinner}
              {searchContent}
              {searchErrorMessage}
              <div className="paginator">{searchPagination}</div>
            </TabPane>
            <TabPane tab="Rated" key="2">
              {ratedSpinner}
              {ratedContent}
              {ratedErrorMessage}
              <div className="paginator">{ratedPagination}</div>
            </TabPane>
          </Tabs>
        </MdbapiServiceProvider>
      </section>
    );
  }
}
