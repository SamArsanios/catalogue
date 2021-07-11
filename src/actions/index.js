import { SEARCH_FILM } from './constants';
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

const searchFilm = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_FILM,
    payload: text
  });
};

export default searchFilm;