import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import Sidebar from "../Sidebar/Sidebar";
import HomeStyle from "./Home.module.scss";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className={HomeStyle.content}>
      <Sidebar />
      <div className={HomeStyle.right}>
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
