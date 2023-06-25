"use client"
import React from 'react'
import './TurningText.scss'
import Image from 'next/image'
import circleText from '../../../../public/images/circleText.png'



const TurningText = (props) => {
   
const text = "Click here to play - Showreel 2022 - "

  return (
    <div className='circle' onClick={()=>{props.setOpenPlayer(true)}}>
        <div className="logo">
            <img src='/svg/playIco.svg' className="vector"/>
        </div>
        <div className="text">
          <Image src={circleText} alt="Click here to play"/>
        </div>
    </div>
  )
}

export default TurningText