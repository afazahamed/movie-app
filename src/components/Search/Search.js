import React, { useState, useEffect } from "react";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import SearchStyle from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handlesearch = () => {
    dispatch(fetchAsyncMovies(search));
  };

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlesearch();
    }
  };

  return (
    <>
      <div className={SearchStyle.wrapper}>
        <div className={SearchStyle.wrapper_inner}>
          <input
            className={SearchStyle.input}
            type="text"
            placeholder="Search movies"
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={SearchStyle.search_btn} onClick={handlesearch}>
            Search
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
