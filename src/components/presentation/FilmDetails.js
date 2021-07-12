/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilmDetails } from '../../actions/index';

export class FilmDetails extends Component {
  componentDidMount() {
    this.props.fetchFilmDetails(this.props.match.params.id);
    // this.props.setLoading();
  }

  render() {
    return (
      <>
        <div className="row" >
          <div className="col-md-4 card card-body">
            <img src="#film-poster" className="thumnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">Film Title</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>Film Genre
              </li>
              <li className="list-group-item">
                <strong>Released:</strong>Film Released
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong>Film Rated
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong>Film Rating
              </li>
              <li className="list-group-item">
                <strong>Director:</strong>Film Director
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong>Film Writer
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong>Film Actors
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About</h3>About the Film
              <hr />
              <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                View ON IMDB
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-dark">
                Go to Search
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.films.loading,
  film: state.films.film,
});

export default connect(mapStateToProps, { fetchFilmDetails })(FilmDetails);
