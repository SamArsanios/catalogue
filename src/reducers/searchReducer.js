import { SEARCH_FILM, FETCH_FILMS } from '../actions/constants';

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
    default:
      return state;
  }
};

export default searchReducer;
