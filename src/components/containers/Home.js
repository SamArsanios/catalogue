import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilmContainer from './FilmContainer';
import Spinner from '../presentation/Spinner';
import Pagination from '../presentation/Pagination';

const Home = (props) => {
  const { loading } = props;

  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <FilmContainer />}
      <Pagination />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.films.loading,
});

Home.propTypes = {
  loading: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
};

export default connect(mapStateToProps)(Home);
