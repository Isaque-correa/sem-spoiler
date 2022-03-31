import React, { useState } from "react";
import { Link } from "react-router-dom";

function MoviesPopular(props) {
  const [description, setDescription] = useState(props.result);

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  const IMG_API = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="moviePopular">
      <div className="moviePopular-cover">
        <Link to={`/movie/${description.id}`}>
          <img
            src={
              description.poster_path
                ? IMG_API + description.poster_path
                : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            }
            alt={description.title}
          />
        </Link>
        <div className="moviePopular-vote">
          <span className={`tag ${setVoteClass(description.vote_average)}`}>
            {description.vote_average}
          </span>
        </div>
        <div className="moviePopular-info">
          <h3>{description.title}</h3>
        </div>
      </div>
    </div>
  );
}
export default MoviesPopular;
