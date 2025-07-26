import React from "react";
import "../SecondaryContainer.css";

import {
  options,
  now_playing_movies_url,
  popular_movies_url,
  top_rated_movies_url,
  upcoming_movies_url,
} from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import {
  addUpcomingMovies,
  addPopularMovies,
  addTopRatedMovies,
} from "../utils/movieSlice";
import { useEffect } from "react";
import CarouselComponent from "./CarouselComponent";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = async () => {
    const popular_movies = await fetch(popular_movies_url, options);
    const popular_movies_json = await popular_movies.json();
    dispatch(addPopularMovies(popular_movies_json.results));

    const top_rated_movies = await fetch(top_rated_movies_url, options);
    const top_rated_movies_json = await top_rated_movies.json();
    dispatch(addTopRatedMovies(top_rated_movies_json.results));

    const upcoming_movies = await fetch(upcoming_movies_url, options);
    const upcoming_movies_json = await upcoming_movies.json();
    dispatch(addUpcomingMovies(upcoming_movies_json.results));
  };

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

 

  return (
    <div>
      <div className="movie-lists">
        <div className="now-playing-movies">
          <h2>Now playing movies</h2>
          {nowPlayingMovies && nowPlayingMovies.length > 0 && (
            <CarouselComponent movies={nowPlayingMovies} />
          )}
        </div>
         
         <div className="top-rated-movies">
          <h2>Top rated movies</h2>
          {topRatedMovies && topRatedMovies.length > 0 && (
            <CarouselComponent movies={topRatedMovies} />
          )}
        </div>
         <div className="popular-movies">
          <h2>Popular movies</h2>
          {popularMovies && popularMovies.length > 0 && (
            <CarouselComponent movies={popularMovies} />
          )}
        </div>
         <div className="upcoming-movies">
          <h2>Upcoming movies</h2>
          {upcomingMovies && upcomingMovies.length > 0 && (
            <CarouselComponent movies={upcomingMovies} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
