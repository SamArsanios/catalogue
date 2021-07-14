import searchReducer, { initialState } from '../reducers/searchReducer';

// export const initialState = {
//   text: '',
//   films: [],
//   loading: false,
//   film: [],
// };

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    text: '',
    films: [],
    loading: false,
    film: [],
  });
});

test('searchReducer can SEARCH_FILM', () => {
  const action = {
    type: 'SEARCH_FILM',
    payload: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).toEqual({
    ...initialState,
    text: action.payload,
    loading: false,
  });
});

test('searchReducer can FETCH_FILMS', () => {
  const action = {
    type: 'FETCH_FILMS',
    films: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).toEqual({
    ...initialState,
    films: action.film,
    loading: false,
  });
});

test('searchReducer can FETCH_FILM_DETAILS', () => {
  const action = {
    type: 'FETCH_FILM_DETAILS',
    payload: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).toEqual({
    ...initialState,
    film: action.payload,
    loading: false,
  });
});
