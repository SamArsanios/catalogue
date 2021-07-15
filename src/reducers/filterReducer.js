import { FILTER_FILM } from '../actions/constants';

export const initialState = {
  filter: 'All',
};

const filmFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FILM: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return { ...state };
  }
};

export default filmFilterReducer;
