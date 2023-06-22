"use client"
import React from 'react'
import Link from 'next/link'
import "./CtaNavBtn.scss"
import { montserrat } from '@/app/font'

interface Props {
    text: string
    ico : string
    url : string
}

const CtaNavBtn = ({text,ico, url}:Props) =>{
  return (
    <Link className='contact_container' href={url} >
        <div className='button'>
        <img src={ico} alt={ico}/>
        <p className={montserrat.className}>{text}</p>
        </div>
    </Link>
  )
}

export default CtaNavBtn