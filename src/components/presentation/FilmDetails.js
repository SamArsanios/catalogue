import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchFilmDetails, setLoading } from '../../actions/index';

const FilmDetails = (props) => {
  useEffect(() => {
    props.fetchFilmDetails(props.match.params.id);
    props.setLoading();
  }, []);

  const { loading, film } = props;

  const filmContent = (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={film.Poster} className="thumnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{film.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Plot: </strong>
              {film.Plot}
            </li>
            <li className="list-group-item">
              <strong>Genre: </strong>
              {film.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released: </strong>
              {film.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated: </strong>
              {film.Rated}
            </li>
            <li className="list-group-item">
              <strong>Rating: </strong>
              {film.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director: </strong>
              {film.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer: </strong>
              {film.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors: </strong>
              {film.Actors}
            </li>
            <li className="list-group-item">
              <strong>Awards: </strong>
              {film.Awards}
            </li>
            <li className="list-group-item">
              <strong>BoxOffice: </strong>
              {film.BoxOffice}
            </li>
            <li className="list-group-item">
              <strong>Language: </strong>
              {film.Language}
            </li>
            <li className="list-group-item">
              <strong>Country: </strong>
              {film.Country}
            </li>
            <li className="list-group-item">
              <strong>BoxOffice: </strong>
              {film.BoxOffice}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 text-light">
          <div className="col-md-12">
            <hr />
            <a href={`https://www.imdb.com/title/${film.imdbID}`} target="_blank" rel="noopener noreferrer" className="btn mx-5 mt-2 btn-dark">
              View ON IMDB
            </a>
            <Link to="/" rel="noopener noreferrer" className="btn mx-3 btn-default btn-dark">
              Go Back to Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const content = loading ? '' : filmContent;
  return (
    <div>{content}</div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.films.loading,
  film: state.films.film,
});

FilmDetails.propTypes = {
  fetchFilmDetails: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  film: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  match: PropTypes.number,
};

FilmDetails.defaultProps = {
  film: [],
  loading: false,
  match: '',
};

export default connect(mapStateToProps, { fetchFilmDetails, setLoading })(FilmDetails);
