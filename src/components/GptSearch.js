import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../GptSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import Openai from "./Openai";

const GptSearch = () => {
  return (
    <div className="background">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg" />

      <Box
        className="gpt-search-box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          "& > :first-of-type": { width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Enter a prompt to search movies" variant="filled" />
        <div className="search-icon">
          <SearchIcon fontSize="medium" />
        </div>
      </Box>

      <Openai/>
    </div>
  );
};

export default GptSearch;
