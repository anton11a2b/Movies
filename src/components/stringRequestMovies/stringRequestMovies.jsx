import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import './stringRequestMovies.css';

const StringRequestMovies = ({ updateSearchString }) => {
  const onLabelChange = (text) => {
    if (text) {
      updateSearchString(text);
    }
  };

  return (
    <form>
      <input
        className="stringRequest"
        type="text"
        placeholder="Type to search..."
        onChange={debounce((event) => onLabelChange(event.target.value), 1000)}
        autoFocus
      />
    </form>
  );
};

StringRequestMovies.defaultProps = {
  updateSearchString: () => {},
};

StringRequestMovies.propTypes = {
  updateSearchString: PropTypes.func,
};

export default StringRequestMovies;
