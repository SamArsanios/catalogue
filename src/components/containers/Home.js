/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilmContainer from './FilmContainer';
import Spinner from '../presentation/Spinner';

const Home = (props) => {
  const { loading, initialScreen } = props;

  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : ((initialScreen ? '' : <FilmContainer />))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.films.loading,
});

Home.propTypes = {
  loading: PropTypes.bool,
  initialScreen: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
  initialScreen: true,
};

export default connect(mapStateToProps)(Home);
