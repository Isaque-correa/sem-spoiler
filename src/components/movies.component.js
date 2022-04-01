import { getMovieAsync, getSearchAsync } from "../services/films.service";
import React, { useEffect, useState } from "react";
import Search from "./search.component";
import MoviesPopular from "./moviesPopular.component";


function MoviesComponent(props) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //USE EFFECT DA CATEGORIA
  useEffect(async () => {
    let res = await getMovieAsync(props.category);
    setMovies(res.results);
  }, []);

  //FUNCTION DO SEARCH
  const handleOnSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      setMovies([]);
      let res = await getSearchAsync(searchTerm);
      setMovies(res.results);
      setSearchTerm("");
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="movie">
        <div className="movieLogo">
          <p className="movieLogo-title">Sem Spoiler</p>
        </div>
        <Search
          className="search"
          search={handleOnSearch}
          valueState={searchTerm}
          change={handleOnChange}
        />
        <div>
          <div className="movie-popular">
            {movies.length > 0 &&
              movies.map((movie, i) => (
                <MoviesPopular key={movie.id} result={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesComponent;
