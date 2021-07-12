/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilmContainer from './FilmContainer';
export class Home extends Component { // eslint-disable
  render() {
    const { loading } = this.props;

    return (
      <div className="container">
        <SearchForm />
        {loading ? '' : <FilmContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.films.loading,
});

export default connect(mapStateToProps)(Home);
