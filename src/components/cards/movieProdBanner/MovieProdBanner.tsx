import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import "./MovieProdBanner.scss"


interface Props {
    title: string
    img : string
    link : string
    
  }

const MovieProdBanner = ({title, img, link}:Props) => {
  return (
    <Link href={link}>
    <div className='movieProdBanner'>
        <Image
        src={img}
        alt=''
        fill={true}
        className='imgProjectBanner'
        />
        <h2
        className='projectTitle'
        >
            {title}
        </h2>
    </div>
    </Link>
  )
}

export default MovieProdBanner