export const initialState = {
  comics: {},
  loading: false,
  error: null,
};

const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_REQUEST':
      return {
        ...state,
        comics: {},
        loading: true,
        error: null,
      };
    case 'FETCH_API_SUCCESS':
      return {
        ...state,
        comics: action.payload,
        loading: false,
      };
    case 'FETCH_API_FAILURE':
      return {
        ...state,
        comics: {},
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default comicReducer;
