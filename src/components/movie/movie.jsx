import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import './movie.css';

const Movie = ({ movieImgSrc, movieName, releaseDate, description }) => (
  <Col span={12}>
    <div className="movie">
      <div className="img-container">
        <img alt="movieBaner" src={movieImgSrc} />
      </div>
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

Movie.defaultProps = {
  movieImgSrc: '',
  movieName: '',
  releaseDate: '',
  description: '',
};

Movie.propTypes = {
  movieImgSrc: PropTypes.string,
  movieName: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
};

export default Movie;
