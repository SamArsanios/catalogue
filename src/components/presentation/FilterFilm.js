import React from 'react';
import PropTypes from 'prop-types';

const FilterFilm = (props) => {
  const { handleFilterChange } = props;
  const genres = ['All', 'movie', 'series'];

  return (
    <div>
      <select
        onChange={handleFilterChange}
        className="form-select my-5"
        aria-label="Default select example"
      >
        {
          genres.map((genre) => (
            <option
              key={genre}
              value={genre}
            >
              {genre}
            </option>
          ))
        }
      </select>
    </div>
  );
};

FilterFilm.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterFilm;
