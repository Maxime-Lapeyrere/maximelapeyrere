"use client"
import Link from 'next/link'
import React from 'react'
import CtaNavBtn from '../buttons/CtaNavBtn/CtaNavBtn'
import "./Navbar.scss"
import LogoSmall from "../../../public/icons/logoSmall" 
import { bsd } from '@/app/font'

const links = [
  {
    id : 1,
    title : "accueil",
    url: "/"
  },
  {
    id : 2,
    title : "à propos",
    url: "/about"
  },
  {
    id : 3,
    title : "services",
    url: "/services"
  },
  {
    id : 4,
    title : "portfolio",
    url: "/work"
  },
  {
    id : 5,
    title : "boutique",
    url: "/shop"
  },
  {
    id : 6,
    title : "blog",
    url: "/blog"
  },
]

const Navbar = () => {
  return (
    <div className={`navbar_component ${bsd.className}`}>
      <div className="leftnav">
      <Link href={"/"}><LogoSmall/></Link>
      </div>
      <div className='bloc_nav'>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className=''>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="bloc_nav">
        <button
        className='login'
        onClick={()=>{
          console.log("loged in")
        }}
        >
          Log in
        </button>
        <Link href={"https://www.instagram.com/max.lprr/"} target='_blank'>
          <img src={"/svg/instagram.svg"} alt='instagram logo'/>
        </Link>
        <Link href={"https://www.linkedin.com/in/maxime-lapeyrere/"} target='_blank'>
          <img src={"/svg/linkedin.svg"} alt='linkedin logo'/>
        </Link>
          <CtaNavBtn text="Contacte moi" url="/contact" ico="/svg/whiterocket.svg"/>
      </div>
    </div>
  )
}

export default Navbar