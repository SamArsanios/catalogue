import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/presentation/NavBar';
import Home from './components/containers/Home';
import FilmDetails from './components/presentation/FilmDetails';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Route component={Home} exact path="/" />
      <Route component={FilmDetails} exact path="/film/:id" />
    </BrowserRouter>
  </>
);
export default App;
