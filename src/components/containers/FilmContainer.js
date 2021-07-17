import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Film from '../presentation/Film';

const FilmContainer = (props) => {
  const { films, filter } = props;

  const filterFilms = (films, filter) => (filter === 'All' ? films.Search
    : films.Search.filter((film) => film.Type === filter));

  const filteredFilms = filterFilms(films, filter);

  console.log(films);

  let content = '';
  content = films.Response === 'True'
    ? filteredFilms.map((film) => <Film key={film.imdbID} film={film} />) : '';
  return (
    <div className="row">
      {content}
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.films.films,
  filter: state.filter.filter,
});

FilmContainer.propTypes = {
  films: PropTypes.instanceOf(Object),
  filter: PropTypes.string,
};

FilmContainer.defaultProps = {
  films: [],
  filter: '',
};

export default connect(mapStateToProps)(FilmContainer);
