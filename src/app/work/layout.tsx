import React, { Children } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategorySelector from '@/components/selector/CategorySelector'
import video from './video/page'
import Photo from './photo/page'
import "../services/service.scss"
import ProjectTypeBanner from '@/components/cards/ProjectTypeBanner/ProjectTypeBanner'
import { montserrat } from '../font'

export default function Work({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <div className='service_page_container'>
        {children}
    </div>
  )
}
