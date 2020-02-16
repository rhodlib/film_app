import axios from "axios";

const uri = "https://api.themoviedb.org/3/";
const api_key = "3ce703499b9ba8076242578c986cc4c7";

export const getData = list =>
  axios.get(`${uri}movie/${list}?api_key=${api_key}&language=en-US`);
export const getCategories = () =>
  axios.get(`${uri}genre/movie/list?api_key=${api_key}`);
export const getMoviesForGenre = id =>
  axios.get(
    `${uri}discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  );
export const getSearchMovie = query => axios.get(`${uri}search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`);