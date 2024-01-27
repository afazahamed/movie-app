import React from "react";
import { Link } from "react-router-dom";
import MovieCardStyle from "./MovieCard.module.scss";
import "boxicons";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      <div
        className={MovieCardStyle.card}
        style={{ backgroundImage: `url(${data.Poster})` }}
      >
        <div className={MovieCardStyle.movie_details}>
          <div className={MovieCardStyle.left}>
            <Link to={`/movie/${data.imdbID}`}>
              <h3 className={MovieCardStyle.movie_title}>{data.Title}</h3>
            </Link>
            <small className={MovieCardStyle.year}>{data.Year}</small>
          </div>
          <div className={MovieCardStyle.right}>
            <div className={MovieCardStyle.playbtn}>
              <box-icon
                type="regular"
                size="lg"
                name="caret-right-circle"
                color="white"
              ></box-icon>
            </div>
          </div>
        </div>

        <div className={MovieCardStyle.card_gradient}></div>
      </div>
    </>
  );
};

export default MovieCard;
