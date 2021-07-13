/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Film from '../presentation/Film';

// export class FilmContainer extends Component {
//   constructor(props) {
//     super(props)
//   }
const FilmContainer = (props) => {

  const { films, filter } = props;

  const filterFilms = (films, filter) => (filter === 'All' ? films.Search
    : films.Search.filter((film) => film.Type === filter));

  console.log(films);
  const filteredFilms = filterFilms(films, filter);

  let content = '';
  // if (filteredFilms) console.log(filteredFilms[0]);
  content = films.Response == 'True'
    ? filteredFilms.map((film, index) => <Film key={index} film={film} />) : 'Sorry, Film not available';
  return (
    <div className="row">
      {content}
    </div>
  );
}

const mapStateToProps = (state) => ({
  films: state.films.films,
  filter: state.filter.filter
});

export default connect(mapStateToProps)(FilmContainer);
