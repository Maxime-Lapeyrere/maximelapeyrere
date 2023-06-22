"use client"
import React from 'react'
import Link from 'next/link'
import "./PrimaryBtn.scss"
import { bsd } from '@/app/font'

interface Props {
    text: string
    ico : string
    url : string
}

const PrimaryBtn = ({text,ico, url}:Props) =>{
  return (
    <Link className='container' href={url} >
        <button className='button'>
        <img src={url} alt={ico}/>
        <p className={bsd.className}>{text}</p>
        </button>
    </Link>
  )
}

export default PrimaryBtn 