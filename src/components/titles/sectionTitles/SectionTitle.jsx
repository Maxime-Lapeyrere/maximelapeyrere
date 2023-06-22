import React from 'react'
import './SectionTitle.scss'

const SectionTitle = ({nmb, ttl}) => {
  return (
    <div className="titleContainer">
    <div className='sectionTitleIdx'>
        <div className="numberIdx">{nmb}</div>
        <div className="titleIdx">{ttl}</div>
    </div>
    </div>
  )
}

export default SectionTitle