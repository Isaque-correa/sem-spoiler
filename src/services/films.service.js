import axios from "axios";

const getInstanse = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const getMovieAsync = async (category) => {
  let res = await getInstanse.get(`movie/${category}`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_KEY,
      language: "pt-br",
    },
  });
  
  return res.data;
};


const getIdAsync = async (id) => {
  let res = await getInstanse.get(`movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_KEY,
      language: "pt-br",
      append_to_response: 'videos',
    },
  });
  return res.data;
};

const getSearchAsync = async (q) => {
  let res = await getInstanse.get(`/search/movie`, {
    params: {
      query: q,
      api_key: process.env.REACT_APP_MOVIE_KEY,
      language: "pt-br",
      page: "1",
      include_adult: false,
    },
  });
  return res.data;
};

export { getMovieAsync, getSearchAsync, getIdAsync};
