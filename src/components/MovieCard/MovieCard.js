import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.Poster} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <p className="card-text">{data.Year}</p>
          <Link to={`/movie/${data.imdbID}`}>
            <div className="btn btn-primary">View</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
