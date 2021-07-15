import filmFilterReducer, { initialState } from '../reducers/filterReducer';

test('initialState to be as expected', () => {
  expect(initialState).toEqual({
    filter: 'All',
  });
});

test('filmFilterReducer can change filter ', () => {
  const action = {
    type: 'FILTER_FILM',
    payload: 'series',
  };
  expect(filmFilterReducer(initialState, action)).toEqual({
    ...initialState,
    filter: 'series',
  });
});

test('filmFilterReducer doesn\'t change filter when given wrong action ', () => {
  const action = {
    type: 'random',
    filter: 'series',
  };
  expect(filmFilterReducer(initialState, action)).not.toEqual({
    ...initialState,
    filter: 'series',
  });
});
