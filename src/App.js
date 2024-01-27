import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
