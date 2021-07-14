import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import FilterFilm from '../components/presentation/FilterFilm';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <FilterFilm />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
