import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Movie from '../movie/movie';
import './moviesList.css';

const MoviesList = ({ moviesData, loading }) => (
  <section className="main">
    <Row gutter={[36, 35]}>
      {moviesData.map(({ id, movieImgSrc, movieName, releaseDate, description }) => (
        <Movie
          key={id}
          movieImgSrc={movieImgSrc}
          movieName={movieName}
          releaseDate={releaseDate}
          description={description}
          loading={loading}
        />
      ))}
    </Row>
  </section>
);

MoviesList.defaultProps = {
  loading: false,
  moviesData: [],
};

MoviesList.propTypes = {
  loading: PropTypes.bool,
  moviesData: PropTypes.arrayOf(PropTypes.any),
};

export default MoviesList;
