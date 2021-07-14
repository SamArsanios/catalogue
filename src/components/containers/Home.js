import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilmContainer from './FilmContainer';
import Spinner from '../presentation/Spinner';

const Home = (props) => {
  const { loading } = props;

  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <FilmContainer />}
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
