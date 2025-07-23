import React from 'react'
import '../VideoTitle.css';
const VideoTitle = ({title,overview}) => {
  return (
    <div className="container">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div>
            <button className="btn play">▶ Play</button>
            <button className="btn info">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle