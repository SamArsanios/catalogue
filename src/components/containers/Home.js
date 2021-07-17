import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import FilmContainer from './FilmContainer';
import Spinner from '../presentation/Spinner';
import Pagination from '../presentation/Pagination';
import { fetchFilms } from '../../actions/index';

const Home = (props) => {
  const [page, setPage] = useState(1);
  const { loading } = props;

  useEffect(() => {
    props.fetchFilms(props.text, page);
  }, [page]);

  const handleNextClick = () => {
    setPage((page) => page + 1);
  };

  const handlePreviousClick = () => {
    setPage((page) => (page === 1 ? page : page - 1));
  };

  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <FilmContainer />}
      <Pagination handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.films.loading,
});

Home.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  fetchFilms: PropTypes.func.isRequired,
};

Home.defaultProps = {
  loading: false,
  text: false,
};

export default connect(mapStateToProps, { fetchFilms })(Home);
