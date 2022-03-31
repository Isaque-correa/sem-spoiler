import { getIdAsync } from "../services/films.service";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import MovieComments from "./movieComments.components/movieComments.component";

function MovieDetail() {
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState(null);

  let { id } = useParams();
  
  useEffect(async () => {
    let res = await getIdAsync(id);
    
    setMovie(res);
    //----------------------
    const data = await getIdAsync(id);
    setTrailer(data.videos.results[0].key);
  }, []);

  const setVoteClass = (vote)=>{
    if(vote >=8){
     return "green";
   }else if(vote >= 6){
     return "orange";
   }else{
     return "red";
   }
 }
 const IMG_API = "https://image.tmdb.org/t/p/w500"
 


  if (movie) {
    return (
      <div className="container">
          <Link to={`/`} className="movieDetail-voltar">VOLTAR</Link>
        <div className="movieDetail-main">
          <div className="movieDetail-cover">
            <img
              src={movie.poster_path ? IMG_API + movie.poster_path : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
              alt={movie.title}
            />
            <div className="movieDetail-vote">
              <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
            </div>
            <div className="movieDetail-title">
              <h2>{movie.title}</h2>
            </div>
          </div>
          <div className="movieDetail-info">
            <YouTube className="movieDetail-trailer" videoId={trailer} />
            <div className="movieDetail-description">
              <h3>Sinopse:</h3>
              <p>{movie.overview ? movie.overview : "Desculpe mas no momento estamos sem a snopse...obrigado pela compreensão"}</p>
            </div>
          </div>
        </div>
        <MovieComments/>
      </div>
    );
  } else {
    return <h1>Pagina não encontrada</h1>;
  }
}
export default MovieDetail;
