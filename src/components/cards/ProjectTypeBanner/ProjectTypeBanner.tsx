import React from 'react'
import Image from 'next/image'
import { bsid } from '@/app/font'


interface Props {
    title: string
    img : string
  }

const ProjectTypeBanner = ({title, img}:Props) => {
  return (

    <div className="img_container">
    <Image
    src={img}
    fill={true}
    alt=''
    className='img_banner'
    />
    <h1 className={`img_title ${bsid.className}`}>{title}</h1>
  </div>
  )
}

export default ProjectTypeBanner