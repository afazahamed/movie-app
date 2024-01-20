import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesOrShowsByID,
  getSinglePost,
  getPending,
} from "../../features/movies/movieSlice";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSinglePost);

  const pending = useSelector(getPending);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsByID(imdbID));
  }, [dispatch, imdbID]);

  //   {data.Title}

  return (
    <div className="container">
      <Link to={"/"}>
        <div className="btn btn-small btn-primary mt-4 mb-4">Back</div>
      </Link>

      {JSON.stringify(pending)}
      {pending == true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6">
              <img src={data.Poster} className="image-fluid" />
            </div>
            <div className="col-md-6">
              <h2>{data.Title}</h2>
              <p>{data.Year}</p>
              <ul className="list-group">
                <li className="list-group-item">Released: {data.Released}</li>
                <li className="list-group-item">Runtime: {data.Runtime} </li>
                <li className="list-group-item">Genre: {data.Genre}</li>
                <li className="list-group-item">Director: {data.Director} </li>
                <li className="list-group-item">Writer: {data.Writer}</li>
                <li className="list-group-item">Actor: {data.Actors}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="mt-4">{data.Plot}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
