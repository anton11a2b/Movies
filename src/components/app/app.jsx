import React, { Component } from 'react';
import { Pagination, Tabs } from 'antd';

import Spinner from '../spinner/spinner';
import MovieList from '../moviesList/moviesList';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import StringRequestMovies from '../stringRequestMovies/stringRequestMovies';

import initialState from '../../initialState ';
import MdbapiServices from '../../services/mdbapiServices';
import { MdbapiServiceProvider } from '../../context/mdbApi-service-context';
import { callback, updateRatedPage, updateSearchPage, updateSearchString } from '../../eventHandlers/eventHandlers';

import './app.css';

export default class App extends Component {
  mdbapiServices = new MdbapiServices();

  state = initialState;

  componentDidMount() {
    this.mdbapiServices.сreateGuestSession();
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
        pageSize={10}
        total={searchTotal}
        showSizeChanger={false}
        defaultCurrent={searchPage}
        onChange={(page) => updateSearchPage(page, this)}
      />
    ) : null;
    const ratedPagination = ratedTotal ? (
      <Pagination
        pageSize={10}
        total={ratedTotal}
        showSizeChanger={false}
        defaultCurrent={ratedPage}
        onChange={(page) => updateRatedPage(page, this)}
      />
    ) : null;

    return (
      <section className="movieApp">
        <MdbapiServiceProvider value={this.mdbapiServices}>
          <Tabs centered defaultActiveKey="1" onChange={(activeKey) => callback(activeKey, this)}>
            <TabPane tab="Search" key="1">
              <StringRequestMovies updateSearchString={(text) => updateSearchString(text, this)} />
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
