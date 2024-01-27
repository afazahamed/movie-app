import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getPending } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import TopRatedStyle from "./Movies.module.scss";

const Movies = () => {
  const movies = useSelector(getAllMovies);
  const pending = useSelector(getPending);

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{movies.Error}</div>
    );

  return (
    <>
      <div className={TopRatedStyle.wrapper}>
        <div className={TopRatedStyle.horizontal_scroll}>
          {pending == true ? (
            <h1 className={TopRatedStyle.loading}>Loading...</h1>
          ) : (
            renderMovies
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
