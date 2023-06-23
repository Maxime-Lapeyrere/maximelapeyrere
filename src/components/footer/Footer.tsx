import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./Footer.scss"
import { bsid,montserrat, bsd } from '@/app/font'

const Footer = () => {
  return (
    <section className='footer_section'>
      <div className="upper_footer">
        <h2 className={montserrat.className}>Vous pensez que je suis la personne idéale pour votre projet? <br/>
        Je serai ravi de vous écouter et d&apos;en savoir plus!
        </h2>
        <div className="upper_footer_cta">
          <div className="cta_illustration">
            <Image height={106} width={106} alt='emoji maxime lapeyrere' src={"/images/memoji.png"}/>
            <p className={montserrat.className}>
              <span style={{fontSize:'10px', fontWeight:'400'}}>time UTC</span><br />
              <span style={{fontWeight:'800', fontSize:'14px'}}>Maxime Lapeyrere</span><br />
              <span style={{fontWeight:'400', fontSize:'12px'}}>Paris, France</span>
            </p>
          </div>
          <Link href={"/contact"} className='contact_link'>
          <h1 className={bsd.className} style={{fontSize:'96px', fontWeight:'900', textTransform:'uppercase', textDecorationLine:'underline'}}>Prendre Contact</h1>
          </Link>
        </div>
      </div>
      <div className={`center_footer ${montserrat.className}`}>
        <div className="center_footer_bloc flex">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link href={"/services"}>
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href={"/work"}>
                <p>Portfolio & Production vidéo</p>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <p>à Propos</p>
              </Link>
            </li>
            <li>
              <Link href={"/shop"}>
                <p>Ma Boutique fine art</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="center_footer_bloc flex">
          <h2>Découvre en plus</h2>
          <ul>
            <li>
              <Link href={"/"}>
                <p>mon site de Web Designer & Web Developer</p> 
              </Link>
            </li>
            <li>
              <Link href={"/"}>
              <p>Mon blog Voyage</p>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <p>Mes NFTs</p>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <p>Mes créations Etsy</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="contact_footer_bloc flex">
          <h2>Contact</h2>
          <p>Basé à Paris, à Genève, et en Bretagne. <br/>
          Disponible et mobile à l&apos;internationnal.
          </p>
          <p>
            <a href="mailto:hello@maximelapeyrere.com, maxime.lapeyrerepro@gmail.com?subject=Prise de contact depuis le site internet" target='_blank'>maxime.lapeyrerepro@gmail.com</a>
            <br /> 
            <a href="tel:+33651992162">(+33) 06 51 99 21 62</a>
          </p>
          <Link href={"/faq"}>FAQ</Link>
        </div>
      </div>
      <div className={`lower_footer ${montserrat.className}`}>
        <div className="right_lower">
          <Link href={"/legals"} style={{fontSize:'12px', fontWeight:'400', color:'#FFFFFF' }}>Mentions légales</Link>
        </div>
        <div className="center_lower">
          <p style={{fontSize:'10px', fontWeight:'300', color:'#E9E9E9' }}>design et développement par</p>
          <p style={{fontSize:'12px', fontWeight:'600', color:'#FFFFFF' }}>© Maxime Lapeyrere 2023</p>
        </div>
        <div className="right_lower">
          <img src={"/svg/youtube.svg"} alt='youtube logo'/>
          <img src={"/svg/facebook.svg"} alt='facebook logo'/>
          <img src={"/svg/pinterest.svg"} alt='pinterest logo'/>
          <img src={"/svg/instagram.svg"} alt='instagram logo'/>
          <img src={"/svg/linkedin.svg"} alt='linkedin logo'/>
          <img src={"/svg/twitter.svg"} alt='twitter logo'/>
        </div>
      </div>
    </section>
  )
}

export default Footer