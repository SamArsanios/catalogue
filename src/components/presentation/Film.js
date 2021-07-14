import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Film = (props) => {
  const { film } = props;
  return (
    <div className="col-md-3 my-4">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={film.Poster} alt="Film Cover" />
        <h5 className="text-light card-title">
          {film.Title}
          -
          {film.Year}
        </h5>
        <Link className="btn btn-warning mt-auto" to={`/film/${film.imdbID}`}>
          Film Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.arrayOf(PropTypes.object),
};

Film.defaultProps = {
  film: [],
};

export default Film;
