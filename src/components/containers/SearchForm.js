import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchFilm, fetchFilms, setLoading, filterFilm,
} from '../../actions/index';
import FilterFilm from '../presentation/FilterFilm';

const SearchForm = (props) => {
  const { filterFilm } = props;

  useEffect(() => {
    props.fetchFilms('2021');
  }, []);

  const onChange = (e) => {
    props.searchFilm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.text === '') {
      props.fetchFilms('2021');
    } else {
      props.fetchFilms(props.text);
    }
    props.setLoading();
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    filterFilm(filter);
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
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
};

const mapStateToProps = (state) => ({
  text: state.films.text,
});

SearchForm.propTypes = {
  searchFilm: PropTypes.func.isRequired,
  fetchFilms: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  filterFilm: PropTypes.func.isRequired,
  text: PropTypes.string,
};

SearchForm.defaultProps = {
  text: 'false',
};
export default connect(mapStateToProps, {
  searchFilm, fetchFilms, setLoading, filterFilm,
})(SearchForm);
