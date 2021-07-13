/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilmDetails, setLoading } from '../../actions/index';
import { Link } from 'react-router-dom';
export class FilmDetails extends Component {
  componentDidMount() {
    this.props.fetchFilmDetails(this.props.match.params.id);
    this.props.setLoading();
  }

  render() {
    const { loading, film } = this.props;

    let filmContent = (
      <div className="container">
        <div className="row" >
          <div className="col-md-4 card card-body">
            <img src={film.Poster} className="thumnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{film.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Plot: </strong>{film.Plot}
              </li>
              <li className="list-group-item">
                <strong>Genre: </strong>{film.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released: </strong>{film.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated: </strong>{film.Rated}
              </li>
              <li className="list-group-item">
                <strong>Rating: </strong>{film.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director: </strong>{film.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer: </strong>{film.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors: </strong>{film.Actors}
              </li>
              <li className="list-group-item">
                <strong>Awards: </strong>{film.Awards}
              </li>
              <li className="list-group-item">
                <strong>BoxOffice: </strong>{film.BoxOffice}
              </li>
              <li className="list-group-item">
                <strong>Language: </strong>{film.Language}
              </li>
              <li className="list-group-item">
                <strong>Country: </strong>{film.Country}
              </li>
              <li className="list-group-item">
                <strong>BoxOffice: </strong>{film.BoxOffice}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              {/* <h3>About</h3>{film.Plot} */}
              <hr />
              <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                View ON IMDB
            </a>
              <Link to="/" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-dark">
                Go to Search
            </Link>
            </div>
          </div>
        </div>
      </div>);

    let content = loading ? '' : filmContent;
    return (
      <div>{content}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.films.loading,
  film: state.films.film,
});

export default connect(mapStateToProps, { fetchFilmDetails, setLoading })(FilmDetails);
