import React from "react";
import MovieListingStyle from "./MovieListing.module.scss";
import TopRated from "../TopRated/TopRated";
import Movies from "../Movies/Movies";

const MovieListing = () => {
  return (
    <>
      <h2 className={MovieListingStyle.movie_title}>Top Rated</h2>
      <TopRated />

      <h2 className={MovieListingStyle.movie_title}>Picked for you</h2>
      <Movies />
    </>
  );
};

export default MovieListing;
