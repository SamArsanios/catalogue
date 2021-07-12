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

    console.log(this.props);
    content = films.length > 0 ? films.map((film, index) => <Film key={index} film={film} />) : null;
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
