/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm, fetchFilms, setLoading } from '../../actions/index';
import FilterFilm from '../presentation/FilterFilm';
import { filterFilm } from '../../actions/index';
// class SearchForm extends Component {
const SearchForm = (props) => {

  const { filterFilm } = props;
  // state = {}
  const onChange = (e) => {
    props.searchFilm(e.target.value);//eslint-disable
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchFilms(props.text);//eslint-disable
    props.setLoading();
  }

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    filterFilm(filter);
  };
  // render() {
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
          {' '}
            Search Films
          </h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input onChange={onChange} type="text" className="form-control" name="searchText" placeholder="Search Films . . ." />
          <FilterFilm handleFilterChange={handleFilterChange} />
          <button type="submit" className="btn btn-dark w-25 btn-bg mb-3">Search</button>
        </form>
      </div>
    </div>
  );
  // }
}

const mapStateToProps = (state) => ({
  text: state.films.text,
});


export default connect(mapStateToProps, { searchFilm, fetchFilms, setLoading, filterFilm })(SearchForm);
