import {updateSearchMovieList, updateRatedMovieList} from '../helpers/helpers'

export const updateSearchString = (text, movieThis) => {
  const { searchPage } = movieThis.state;

  movieThis.setState({
    searchString: text,
  });

  updateSearchMovieList(text, searchPage, movieThis);
};

export const updateSearchPage = (page, movieThis) => {
  const { searchString } = movieThis.state;

  updateSearchMovieList(searchString, page, movieThis);
};

export const updateRatedPage = (page, movieThis) => {
  movieThis.setState({
    ratedPage: page,
  });

  updateRatedMovieList(page, movieThis);
};

export const callback = (activeKey, movieThis) => {
  const { ratedPage } = movieThis.state;

  if (activeKey === '2') {
    updateRatedMovieList(ratedPage, movieThis);
  }
};
