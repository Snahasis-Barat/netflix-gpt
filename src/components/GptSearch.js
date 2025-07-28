import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../GptSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import getResponse from "./Openai";
import { useRef } from "react";
import { search_movies_url,options } from "../utils/const";


const GptSearch = () => {



 const searchedMovies=useRef(null);

const handleGPTSearch = async() => {

  const movieList=await getResponse(searchedMovies.current.value)
  const movieInformationFromTmdb=movieList.map(movie=>searchTmdbMovie(movie));
  console.log(movieInformationFromTmdb);
  
}

const searchTmdbMovie=async (movie) => {
     const data=await fetch(search_movies_url+movie+"&include_adult=false&language=en-US&page=1",options);
  return data.json().results;
}

  return (
    <div className="background">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg" />

      <Box
        className="gpt-search-box"
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          "& > :first-of-type": { width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField inputRef={searchedMovies}
          id="outlined-basic"
          label="Enter a prompt to search movies"
          variant="filled"
        />
        <div>
          <SearchIcon className="search-icon" fontSize="medium" onClick={handleGPTSearch} />
        </div>
      </Box>

     
    </div>
  );
};

export default GptSearch;
