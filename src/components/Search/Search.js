import React, { useState } from "react";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handlesearch = () => {
    dispatch(fetchAsyncMovies(search));
  };

  return (
    <>
      <input
        className="form-control form-control-lg mb-4"
        type="text"
        placeholder="Search movies"
        aria-label=".form-control-lg example"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div className="btn btn-primary" onClick={handlesearch}>
        Search
      </div>
    </>
  );
};

export default Search;
