import React from 'react'
import { FETCH_API_FAILURE } from '../actions/constants';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        items: action.comic,
        loading: false,
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
}

export default comicReducer;
