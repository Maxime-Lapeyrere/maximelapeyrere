"use client"
import React from 'react'
import "./VideoPlayer.scss"



const VideoPlayer = (source:any) => {
  return (
    <div className='classicVideoPlayer'>
      <video loop controls muted className='showreel_classic_player' autoPlay src={source}>
          <source src={source} type="video/mp4" />
	      </video>
    </div>
  )
}

export default VideoPlayer