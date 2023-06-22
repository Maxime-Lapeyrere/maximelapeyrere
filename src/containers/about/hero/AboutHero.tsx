import React from 'react'
import Image from 'next/image'
import SecondaryBtn from '@/components/buttons/SecondaryBtn/SecondaryBtn'
import "./AboutHero.scss"
import { bsid, montserrat } from '@/app/font'

const AboutHero = () => {
  return (
    <section className='about_hero_section'>
        <div className="left_about_hero">
            <h1 className={bsid.className}>À propos</h1>
            <p className={montserrat.className}>
                Depuis maintenant 5 ans, je raconte en image des histoires<br/>authentiques, pour des particuliers et des entreprises. 
                <br/>
                <br/>
                Ma mission : <br/>
                Créer des visuels percutants qui sauront <br/>
                faire vivre et revivre des moments précieux <br/>
                ou mettre en valeur l’excellence de votre savoir-faire!<br/>
                J’ai toujours à cœur de valoriser de façon créative <br/>
                vos produits, vos services et votre marque.
            </p>
        </div>
        <div className="right_about_hero">
            <Image src="/images/memoji.png" alt="" width={341} height={341} />
            <SecondaryBtn text="Visite ma boutique" ico="shop" url="/svg/shop.svg"  />
            <SecondaryBtn text="check mes portfolios" ico="work" url="/svg/portfolio.svg"  />
        </div>
    </section>
  )
}

export default AboutHero