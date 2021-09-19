import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './movieGenres.css';

const MovieGenres = ({ getGenres, id }) => {
  const [genre, setGenre] = useState(null);

  const getGenre = async () => {
    const genres = await getGenres();

    const res = await genres.filter((element) => element.id === id)[0];

    setGenre(res.name);
  };

  useEffect(() => {
    getGenre();
  });

  return <li className="movieGenres-genre">{genre}</li>;
};

MovieGenres.defaultProps = {
  id: 0,
  getGenres: () => {},
};

MovieGenres.propTypes = {
  id: PropTypes.number,
  getGenres: PropTypes.func,
};

export default MovieGenres;
