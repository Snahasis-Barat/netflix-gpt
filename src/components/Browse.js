import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Browse = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

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
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  }, []);
  return <div>Browse</div>;
};

export default Browse;
