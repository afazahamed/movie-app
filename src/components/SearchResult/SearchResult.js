import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchResultStyle from "./SearchResult.module.scss";
import Movies from "../Movies/Movies";
import Search from "../Search/Search";

const SearchResult = () => {
  return (
    <>
      <div className={SearchResultStyle.content}>
        <Sidebar />
        <div className={SearchResultStyle.right}>
          <h2 className={SearchResultStyle.movie_title}>Search</h2>

          <Search />

          <Movies />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
