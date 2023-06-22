"use client"
import Link from 'next/link'
import React from 'react'
import "./SecondaryBtn.scss"
import { bsd, montserrat } from '@/app/font'

interface Props {
    text: string
    ico : string
    url : string
}

const SecondaryBtn = ({text,ico, url}:Props) =>{
  return (
    <Link className='wrapper_secondary' href={url}>
        <button className='button_secondary'>
        <img src={ico} alt={ico}/>
        <p className={montserrat.className}>{text}</p>
        </button>
    </Link>
  )
}

export default SecondaryBtn