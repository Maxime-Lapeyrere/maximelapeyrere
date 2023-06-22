import React from 'react'
import MovieProdBanner from '@/components/cards/movieProdBanner/MovieProdBanner'
import "./video.scss"
import projects from "../../../lib/videoProjects.json"

const Video = () => {
  return (
    <div className='projectList_container'>
      {projects.map((project)=>(
        <MovieProdBanner key={project.id} title={project.title} img={project.img} link={project.link}/>
      ))}
    </div>
  )
}

export default Video