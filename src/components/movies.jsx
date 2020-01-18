import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  deleteMovie = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: movies
    })
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p>There are currently no movies in the database</p>
    }
    return (
      <div className="table-responsive">
      <span>There are currently {this.state.movies.length} movies in the database</span>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button className="btn btn-danger btn-sm" onClick={() => this.deleteMovie(movie)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default Movies;
