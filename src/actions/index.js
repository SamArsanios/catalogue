import axios from 'axios';
import {
  SEARCH_FILM, FETCH_FILMS, FETCH_FILM_DETAILS, LOADING, FILTER_FILM,
} from './constants';

const apiKey = '6399a366';

const searchFilm = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_FILM,
    payload: text,
  });
};

const fetchFilms = (text, page = 1) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${text}&page=${page}`)
    .then((response) => dispatch({
      type: FETCH_FILMS,
      payload: response.data,
    }))
    .catch((error) => (error));
};

// const changePage = (page) => (dispatch) => {

// }

const fetchFilmDetails = (id) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    .then((response) => dispatch({
      type: FETCH_FILM_DETAILS,
      payload: response.data,
    }))
    .catch((error) => (error));
};

const setLoading = () => ({
  type: LOADING,
});

const filterFilm = (filter) => ({
  type: FILTER_FILM,
  payload: filter,
});

export {
  searchFilm, fetchFilms, fetchFilmDetails, setLoading, filterFilm,
};
