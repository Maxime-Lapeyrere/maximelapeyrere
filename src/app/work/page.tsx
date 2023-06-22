import CategorySelector from '@/components/selector/CategorySelector'
import React from 'react'
import Photo from './photo/page'
import ProjectTypeBanner from '@/components/cards/ProjectTypeBanner/ProjectTypeBanner'
import { montserrat } from '../font'

const Work = () => {
  return (
    <div>
      <div className="presentation_wrapper">
          <ProjectTypeBanner img="/images/pano_nyc.jpg" title='Mes réalisations photo et vidéo'/>
        <p className={montserrat.className}>
           
        </p>
        </div>
        <CategorySelector first="portfolio photo" firstLink="/work/photo" second="production audiovisuelle" secondLink="/work/video" />
      <Photo/>
    </div>
  )
}

export default Work