import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchComics from '../../actions';

const ComicList = (props) => {
  const { comics } = props;
  // const comic = useSelector((state) => state.comic);
  const dispatch = useDispatch();
  // const history = useHistory();
  const location = useLocation();
  const [page] = useState(1);

  if (comics.data) console.log(comics.data.results);
  useEffect(() => {
    dispatch(fetchComics());
    return () => {
      // abortController.abort();
    };
  }, [page, location.search]);

  // const handleNextClick = () => {
  //   setPage((page) => page + 1);
  // };

  // const handlePreviousClick = () => {
  //   setPage((page) => (page === 1 ? page : page - 1));
  // };

  return (
    <div>
      <img src={comics.data ? comics.data.results[2] : ''} alt={comics.title} loading="lazy" width="100px" height="150px" />
      <h2>{comics.title}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comics: state.comicReducer.comics,
  // filter: state.changeFilterReducer.filter,
});

ComicList.propTypes = {
  comics: PropTypes.objectOf(PropTypes.object),
  // removeBook: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

ComicList.defaultProps = {
  comics: [],
};

export default connect(mapStateToProps)(ComicList);
