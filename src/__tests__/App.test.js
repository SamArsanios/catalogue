import { render, screen } from '@testing-library/react';
import create from 'react-test-renderer';
import App from '../App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
