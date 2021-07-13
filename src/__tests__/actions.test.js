import {
    searchFilm, fetchFilms
} from '../actions/index';

// import { FETCH_FILMS } from '../actions/constants';

test('fetchFilma returns SEARCH_FILM', () => {
    const text = { title: 'blah', author: 'blah blah' };
    expect(searchFilm(text)).toEqual({ type: 'SEARCH_FILM', text });
});

const {
    FETCH_FILMS,
} = actions;

describe('fetchFilms', () => {
    it('sets the state propery film1s to a new array', () => {
        const films = [{ film: 'film1' }, { film: 'film2' }];
        const expectation = {
            type: FETCH_FILMS,
            films,
        };
        expect(fetchFilms(films)).toStrictEqual(expectation);
    });
});