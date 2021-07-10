import {
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  FETCH_API_REQUEST,
  fetchApiRequest, fetchApiSuccess, fetchApiFailure
} from './constants';

const api_key = 'e5567719e7a9a7711ba2f297c92dcdbc';
const hash = '2329c78c574a4a57c85382a88fe60f63';

const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${api_key}&hash=${hash}`;

const fetchComics = () => async (dispatch) => {
  dispatch(fetchApiRequest());
  try {
    const response = await fetch(url);
    const comics = await response.json();
    dispatch(fetchApiSuccess(comics));

    console.log(comics);
  } catch (error) {
    dispatch(fetchApiFailure({ message: error.message }));
  }

};

export { fetchComics };