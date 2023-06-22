"use client"
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'
import "./SubPageSelector.scss"
import { montserrat } from '@/app/font'


interface Props {
    text: string
    status: string
    action: MouseEventHandler
    link : string
}

const SubPageSelector = ({text, status, link, action}:Props) =>{
   
    return (
    <Link href={link}>
    <button className={status} onClick={action}>
        <p className={montserrat.className}>{text}</p>
    </button>
    </Link>
  )
}

export default SubPageSelector

// className={router.pathname == "/services" ? "active" : "subpage_selector"}