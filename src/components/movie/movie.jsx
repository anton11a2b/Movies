import React from 'react';
import PropTypes from 'prop-types';
import { Col, Rate } from 'antd';
import MovieGenres from '../movieGenres/movieGenres';
import { MdbapiServiceConsumer } from '../mdbApi-service-context/mdbApi-service-context';
import './movie.css';

const Movie = ({ movieImgSrc, movieName, releaseDate, description, average, genresId, sessionId, rating, id }) => {
  let className = 'movie-average';

  if (average >= 0 && average <= 3) {
    className += ' movie-average__border-rad';
  } else if (average > 3 && average <= 5) {
    className += ' movie-average__border-orange';
  } else if (average > 5 && average <= 7) {
    className += ' movie-average__border-yellow';
  } else if (average > 7) {
    className += ' movie-average__border-green';
  }

  return (
    <MdbapiServiceConsumer>
      {({ getGenres, rateMovie }) => (
        <Col span={12}>
          <div className="movie">
            <div className="img-container">
              <img alt="movieBaner" src={movieImgSrc} />
            </div>
            <div className="main-content">
              <div className="movie-info">
                <div className="movie-title">
                  <h2>{movieName}</h2>
                  <div className={className}>
                    <p>{average}</p>
                  </div>
                </div>
                <p className="movie-releaseDate">{releaseDate}</p>
                <ul className="movieGenres">
                  {genresId.map((id) => (
                    <MovieGenres centered getGenres={getGenres} key={id} id={id} className="movieGenres-genre">
                      Action
                    </MovieGenres>
                  ))}
                </ul>
                <p className="movie-description">{description}</p>
              </div>
              <Rate
                allowHalf
                count={10}
                defaultValue={rating}
                style={{ fontSize: 17, marginBottom: 10 }}
                onChange={(rating) => rateMovie(sessionId, String(id), rating)}
              />
            </div>
          </div>
        </Col>
      )}
    </MdbapiServiceConsumer>
  );
};

Movie.defaultProps = {
  id: 0,
  rating: 0,
  average: 0,
  genresId: [],
  sessionId: '',
  movieName: '',
  movieImgSrc: '',
  releaseDate: '',
  description: '',
};

Movie.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  average: PropTypes.number,
  sessionId: PropTypes.string,
  movieName: PropTypes.string,
  movieImgSrc: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  genresId: PropTypes.arrayOf(PropTypes.any),
};

export default Movie;
