import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/movie';
import './moviesList.css';

const MoviesList = ({ moviesData }) => (
  <section className="main">
    <div className="row">
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
    </div>
  </section>
);

MoviesList.defaultProps = {
  moviesData: [],
};

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.any),
};

export default MoviesList;
