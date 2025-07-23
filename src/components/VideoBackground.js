import React from "react";
import { useEffect } from "react";

const VideoBackground = ({ movieId }) => {
console.log(movieId)

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const url = 'https://api.themoviedb.org/3/movie/1087192/videos';
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVmMWRmZjg2N2VjOGY5ZjQ1ZTgxN2VhNDZiNTA4ZCIsIm5iZiI6MTc1MzAzNzIzNi4xNDMwMDAxLCJzdWIiOiI2ODdkMzliNGEyMzE0NDFmYjUxNjlmMDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gc9uTspHkOn7_hCzhowqukDNqdGBwh5lENzMq-CBcPQ",
      },
    };

    const data = await fetch(url, options);

    const json = await data.json();

    console.log(json);

   
  };

  return <div>VideoBackground</div>;
};

export default VideoBackground;
