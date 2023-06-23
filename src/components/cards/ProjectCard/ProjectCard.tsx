"use client"
import React from 'react'
import Image from 'next/image'
import "./ProjectCard.scss"
import Tag from '@/components/tags/Tag'
import Link from 'next/link'

interface Props {
  title: string
  location : string
  skills : string[]
  img : string
  
}


const ProjectCard = ({title, location, skills, img} : Props) => {
  return (
    <Link href={"/"}>
    <div className='projectCard'>
        <div className="imgBg">
            <Image src={img} width={400} height={266} loading='lazy' alt=''/>
        </div>
        <div className="projectInfo">
            <div className="upperThirdCard"></div>
            <div className="centerCard">
            <h2>{title}</h2>
            <h3>{location}</h3>
            </div>
            <div className="lowerThirdCard">
              {skills.map((skill:string, key:number)=>(
                <Tag key={key}>{skill}</Tag>
              ))}
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard