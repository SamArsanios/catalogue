import { SEARCH_FILM } from '../actions/constants';

const initialState = {
  text = '',
  movies: [],
  loading: false,
  movie: []
}

const searchReducer = () => {
  switch (action.type) {
    case 'SEARCH_FILM':
      return {
        ...state,
        text: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default searchReducer;