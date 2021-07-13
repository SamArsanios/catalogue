/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm, fetchFilms, setLoading } from '../../actions/index';
import FilterFilm from '../presentation/FilterFilm';
import { filterFilm } from '../../actions/index';
class SearchForm extends Component {
  // state = {}
  onChange = (e) => {
    this.props.searchFilm(e.target.value);//eslint-disable
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchFilms(this.props.text);//eslint-disable
    this.props.setLoading();
  }

  render() {
    const { filterFilm } = this.props;

    const handleFilterChange = (e) => {
      const filter = e.target.value;
      filterFilm(filter);
    };

    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" />
            {' '}
            Search Films
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input onChange={this.onChange} type="text" className="form-control" name="searchText" placeholder="Search Films . . ." />
            <FilterFilm handleFilterChange={handleFilterChange} />
            <button type="submit" className="btn btn-primary btn-bg mt-3">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.films.text,
});


export default connect(mapStateToProps, { searchFilm, fetchFilms, setLoading, filterFilm })(SearchForm);
