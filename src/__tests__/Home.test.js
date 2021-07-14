import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import Home from '../components/containers/Home';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const state = {};
const middleware = [thunk];
const store = createStore(rootReducer, state, composeWithDevTools(applyMiddleware(...middleware)),);
const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Wrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

describe('Film', () => {
  it('renders correctly', () => {
    const tree = render(<Home />, { wrapper: Wrapper });
    expect(tree).toMatchSnapshot();
  });
});