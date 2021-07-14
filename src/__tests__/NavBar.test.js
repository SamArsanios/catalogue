import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import NavBar from '../components/presentation/NavBar';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
