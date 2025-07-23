import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";

const Browse = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVmMWRmZjg2N2VjOGY5ZjQ1ZTgxN2VhNDZiNTA4ZCIsIm5iZiI6MTc1MzAzNzIzNi4xNDMwMDAxLCJzdWIiOiI2ODdkMzliNGEyMzE0NDFmYjUxNjlmMDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gc9uTspHkOn7_hCzhowqukDNqdGBwh5lENzMq-CBcPQ",
    },
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, options);

    const json = await data.json();

   
    dispatch(addNowPlayingMovies(json.results));
  };

  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Browse;
