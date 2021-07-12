import { SEARCH_FILM, FETCH_FILMS, FETCH_FILM_DETAILS } from '../actions/constants';

const initialState = {
  text: '',
  films: [],
  loading: false,
  film: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILM:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case FETCH_FILM_DETAILS:
      return {
        ...state,
        film: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
