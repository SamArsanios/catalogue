/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Film from '../presentation/Film';

export class FilmContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { films, filter } = this.props;

    const filterFilms = (films, filter) => (filter === 'All' ? films
      : films.filter((film) => film.category === filter));

    console.log(films);
    const filteredFilms = filterFilms(films, filter);

    let content = '';

    content = films.Response == 'True'
      ? filteredFilms.Search.map((film, index) => <Film key={index} film={film} />) : 'Sorry, Film not available';
    return (
      <div className="row">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films.films,
  filter: state.filter.filter
});

export default connect(mapStateToProps)(FilmContainer);
