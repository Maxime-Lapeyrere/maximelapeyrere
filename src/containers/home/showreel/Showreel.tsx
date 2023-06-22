import React from 'react'
import './showreel.scss'
import SectionTitle from '../../../components/titles/sectionTitles/SectionTitle'
import VideoPlayer from '../../../components/videoPlayer/ClassicPlayer/VideoPlayer'
import CapsulePlayer from '../../../components/videoPlayer/CapsulePlayer/CapsulePlayer'

const Showreel = () => {
  return (
    <section className="showreel">
        {/* <SectionTitle nmb={"01"} ttl={"showreel 2022"}/> */}
      <div className="videoContainer">
        <VideoPlayer source="/video/Oden&Fatzo"/>
        {/* <CapsulePlayer/> */}
      </div>
    </section>
  )
}

export default Showreel