import React from 'react'

import { openai_key } from '../utils/const';
import OpenAI from 'openai';
const Openai = () => {


const client = new OpenAI({
  apiKey: openai_key, // This is the default and can be omitted
});

async function getResponse() {
const response = await client.responses.create({
  model: 'gpt-3.5-turbo',
  instructions: 'You are a coding assistant that talks like a pirate',
 messages: [
   
    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
  ],
});

console.log(response.choices);
}

getResponse();
  return (
    <div>OpenAI</div>
  )
}

export default Openai
