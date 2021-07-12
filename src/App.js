/* eslint-disable */
// import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/presentation/NavBar';
import Home from './components/containers/Home';
import FilmDetails from './components/presentation/FilmDetails';
import Footer from './components/presentation/Footer';
// import ComicList from './components/presentation/ComicList';
// import ComicDetail from './components/presentation/ComicDetail';

// useEffect(() => {
//   const apiKey = 'e5567719e7a9a7711ba2f297c92dcdbc';
//   const hash = '2329c78c574a4a57c85382a88fe60f63';

//   const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKey}&hash=${hash}`;

//   const fetchComics = async (url) => {
//     const response = await fetch(url);
//     const comics = await response.json();

//     console.log(comics);
//   };
//   fetchComics(url.results);
// }, []);

const App = () => (
  <>
    {/* <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={ComicList} />
        <Route exact path="/comic/:id" component={ComicDetail} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter> */}
    <BrowserRouter>
      <NavBar />
      <Route component={Home} exact path="/" />
      <Route component={FilmDetails} exact path="/film/:id" />
      <Footer />
    </BrowserRouter>
  </>
);
export default App;
