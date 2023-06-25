"use client"
import React from 'react'
import "./MainTitle.scss"
import { bsid, montserrat, bsd } from '@/app/font'

interface Props {
    h1: string
    h2 : string
}

const MainTitle = ({h1, h2}:Props) =>{
  return (
    <div className='title_container'>
        <h1 className={bsid.className}>{h1}</h1>
        <h2 className={bsd.className}>{h2}</h2>
    </div>
  )
}

export default MainTitle