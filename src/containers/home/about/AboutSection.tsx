import "./AboutSection.scss"
import React from 'react'
import Image from "next/image"
import MainTitle from "@/components/titles/MainTitle/MainTitle"
import { montserrat } from "@/app/font"

const AboutSection = () => {
  return (
    <section className="AboutSection">
        <div className="profilepicdiv">
            <Image src="/images/aboutpp.png" alt="picture profile" width={450} height={545.45}/>
        </div>
        <div className="aboutInfos">
            <MainTitle h1="Meet Max" h2="Bienvenue dans mon univers" />
            <div className="infoAbout">
                <div className={`infoAboutBis ${montserrat.className}`}>

                <div className="aboutDetails">
                <h3>Ma mission</h3>
                <p>Créateur de contenus numériques indépendant depuis plusieurs années, 
                    je créé et racontes des histoires 
                    par l&apos;image pour refléter au mieux 
                    votre identité et incarner les messages que vous souhaitez faire passer.

                    Mon travail est guidé par la passion, 
                    la sensibilité et l&apos;exigence du détail. 
                    Mon inspiration vient du voyage 🧳, 
                    des rencontres, et des émotions.

                    Je prête une importance toute particulière à l&apos;Humain et à connaître mon client. Notre histoire commencera donc souvent autour d&apos;un  ☕ 
                    ou d&apos;une discussion informelle
                </p>
                </div>
                <div className="aboutDetails">
                <h3>Mes valeurs</h3>
                <h4>Adaptation</h4>
                <h4>Sur-mesure</h4>
                <h4>Collaboration</h4>
                <h4>Créativité</h4>
                <h4>Excellence</h4>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection