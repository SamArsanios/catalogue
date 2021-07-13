import {
    searchFilm, fetchMangaFailure, fetchMangaSuccess, changeFilter,
} from '../actions/index';

test('fetchMangaBegin returns BEGIN', () => {
    const text = { title: 'blah', author: 'blah blah' };
    expect(searchFilm(text)).toEqual({ type: 'SEARCH_FILM', text });
});