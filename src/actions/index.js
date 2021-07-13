import axios from 'axios';
import {
  SEARCH_FILM, FETCH_FILMS, FETCH_FILM_DETAILS, LOADING, FILTER_FILM,
} from './constants';
// import apiKey from '../apiKey';

// import {
//   fetchApiRequest, fetchApiSuccess, fetchApiFailure,
// } from './constants';

// const apiKey = 'e5567719e7a9a7711ba2f297c92dcdbc';
// const hash = '2329c78c574a4a57c85382a88fe60f63';

// const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKey}&hash=${hash}`;

// const fetchComics = () => async (dispatch) => {
//   dispatch(fetchApiRequest());
//   try {
//     const response = await fetch(url);
//     const comics = await response.json();
//     dispatch(fetchApiSuccess(comics));

//     // console.log(comics);
//   } catch (error) {
//     dispatch(fetchApiFailure({ message: error.message }));
//   }
// };

// export default fetchComics;
const apiKey = '6399a366';

const searchFilm = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_FILM,
    payload: text,
  });
};
// http://www.omdbapi.com/?i=tt3896198&apikey=6399a366
const fetchFilms = (text) => (dispatch) => {
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)
    .then((response) => dispatch({
      type: FETCH_FILMS,
      payload: response.data,
    }))
    .catch((error) => console.log(console.log(error)));
};

const fetchFilmDetails = (id) => (dispatch) => {
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    .then((response) => dispatch({
      type: FETCH_FILM_DETAILS,
      payload: response.data,
    }))
    .catch((error) => console.log(console.log(error)));
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
