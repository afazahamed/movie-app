import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getPending,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Search from "../Search/Search";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const pending = useSelector(getPending);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{movies.Error}</div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>{shows.Error}</div>
    );

  return (
    <>
      <h2>Movies</h2>
      {/* {JSON.stringify(pending)} */}

      <Search />
      <div className="container">
        <div className="row">
          {pending == true ? <h1>Loading...</h1> : renderMovies}
        </div>
      </div>
      <h2>Shows</h2>
      <div className="container">
        <div className="row">{renderShows}</div>
      </div>
    </>
  );
};

export default MovieListing;
