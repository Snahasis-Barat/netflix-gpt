import React, { useEffect, useState } from "react";
import "../VideoBackground.css";    
const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const url = "https://api.themoviedb.org/3/movie/1087192/videos";
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

    const trailer = json.results.filter((movie) => movie.type === "Trailer")[2];
    if (trailer) {
      setTrailerKey(trailer.key);
    }
    console.log(trailer);
  };

  return (
    <div>
      <iframe
        width="100%"
        className="screen"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
