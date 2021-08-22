import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import Spinner from '../spinner/spinner';
import './movie.css';

const Movie = ({ movieImgSrc, movieName, releaseDate, description, loading }) => {
  const spinner = loading ? <Spinner /> : null;
  const movieBaner = !loading ? <img alt="movieBaner" src={movieImgSrc} /> : null;

  return (
    <Col span={12}>
      <div className="movie">
        {spinner}
        {movieBaner}
        <div className="movie-info">
          <h2>{movieName}</h2>
          <p className="movie-releaseDate">{releaseDate}</p>
          <ul className="movieGenres">
            <li className="movieGenres-genre">Action</li>
            <li className="movieGenres-genre">Drama</li>
          </ul>
          <p className="movie-description">{description}</p>
        </div>
      </div>
    </Col>
  );
};

Movie.defaultProps = {
  movieImgSrc: '',
  movieName: '',
  releaseDate: '',
  description: '',
  loading: false,
};

Movie.propTypes = {
  movieImgSrc: PropTypes.string,
  movieName: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  loading: PropTypes.bool,
};

export default Movie;
