import React from 'react'
import AboutHero from '@/containers/about/hero/AboutHero'
import Anecdotes from '@/containers/about/anecdotes/Anecdotes'
import AboutTeam from '@/containers/about/team/AboutTeam'
import "./AboutPage.scss"

const About = () => {
  return (
    <div className='about_page'>
      <AboutHero/>
      <Anecdotes/>
      <AboutTeam/>

    </div>
  )
}

export default About