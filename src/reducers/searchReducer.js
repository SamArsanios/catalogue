import {
  SEARCH_FILM, FETCH_FILMS, FETCH_FILM_DETAILS, LOADING,
} from '../actions/constants';

export const initialState = {
  text: '',
  films: [],
  loading: false,
  initialScreen: true,
  film: [],
  page: 1,
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
        loading: false,
      };
    case FETCH_FILM_DETAILS:
      return {
        ...state,
        film: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
