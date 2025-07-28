import React from "react";

// import { openai_key } from '../utils/const';
// import OpenAI from 'openai';
import { cohere_api_key } from "../utils/const";

const getResponse = async (query) => {
  const response = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + cohere_api_key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r",
      message:
        query +
        " ,do not include any other information,only movie name without numbering and extra space",
      max_tokens: 100,
    }),
  });

  const data = await response.json();

  const filteredQuery = data.text
    .split("\n") // split on newlines
    .map((item) => item.trim()) // remove extra spaces
    .filter(Boolean) // remove empty lines
    .map((line) => line.replace(/^\d+\.\s*/, "")) // remove numbering like "1. "
    .filter(Boolean); // in case some are still empty

  return filteredQuery;
};

export default getResponse;
