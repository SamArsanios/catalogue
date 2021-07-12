/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Film extends Component {
  render() {
    const { film } = this.props;
    return (
      <div className="col-md-3 my-4">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={film.Poster} alt="Film Cover" />
          <h5 className="text-light card-title">
            {film.Title}
              -
              {film.Year}
          </h5>
          <Link className="btn btn-warning mt-auto" to={'/film/' + film.imdbID}>
            Film Details
              <i className="fas fa-chevron-right" />
          </Link>
          {/* <span className="btn btn-warning mt-auto">
            Film Details
              <i className="fas fa-chevron-right" />
          </span>  */}
        </div>
      </div>
    );
  }
}

export default Film;
