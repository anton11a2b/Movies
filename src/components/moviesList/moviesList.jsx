import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Movie from '../movie/movie';
import './moviesList.css';

const MoviesList = ({ moviesData }) => (
  <section className="main">
    <Row gutter={[36, 35]}>
      {moviesData.map(({ id, movieImgSrc, movieName, releaseDate, description, average, genresId, rating }) => (
        <Movie
          id={id}
          key={id}
          rating={rating}
          average={average}
          genresId={genresId}
          movieName={movieName}
          movieImgSrc={movieImgSrc}
          releaseDate={releaseDate}
          description={description}
        />
      ))}
    </Row>
  </section>
);

MoviesList.defaultProps = {
  moviesData: [],
};

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.any),
};

export default MoviesList;
