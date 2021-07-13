/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Film from '../presentation/Film';

export class FilmContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { films } = this.props;
    let content = '';

    content = films.Response == 'True'
      ? films.Search.map((film, index) => <Film key={index} film={film} />) : 'Sorry, Film not available';
    return (
      <div className="row">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films.films,
});

export default connect(mapStateToProps)(FilmContainer);
