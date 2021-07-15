import searchReducer, { initialState } from '../reducers/searchReducer';

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    text: '',
    films: [],
    loading: false,
    film: [],
    initialScreen: true,
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

test('searchReducer can initiate LOADING', () => {
  const action = {
    type: 'LOADING',
    payload: true,
  };
  expect(searchReducer(initialState, action)).toEqual({
    ...initialState,
    loading: action.payload,
  });
});

test('searchReducer doesn\'t search film when given wrong action ', () => {
  const action = {
    type: 'random type',
    payload: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).not.toEqual({
    ...initialState,
    text: action.payload,
    loading: false,
  });
});

test('searchReducer doesn\'t fetch films when given wrong action ', () => {
  const action = {
    type: 'random action type',
    films: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).not.toEqual({
    ...initialState,
    films: action.film,
    loading: false,
  });
});

test('searchReducer doesn\'t fetch films details when given wrong action ', () => {
  const action = {
    type: 'wrong action type',
    payload: 'some films',
    loading: false,
  };
  expect(searchReducer(initialState, action)).not.toEqual({
    ...initialState,
    film: action.payload,
    loading: false,
  });
});

test('searchReducer doesn\'t load when given wrong action', () => {
  const action = {
    type: 'wrong action type',
    payload: true,
  };
  expect(searchReducer(initialState, action)).not.toEqual({
    ...initialState,
    loading: action.payload,
  });
});