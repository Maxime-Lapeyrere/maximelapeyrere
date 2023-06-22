import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TertiaryBtn from '@/components/buttons/TertiaryBtn/TertiaryBtn'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import "./b2c.scss"
import { bsid, montserrat } from '@/app/font'

const B2c = () => {
  return (
    <div className={`b2c_services_wrapper ${montserrat.className}`}>
      <div className="b2c_service">
        <div className="service_presentation">
          <h3>Portrait</h3>
          <p>Révélez votre beauté intérieure et extérieure à travers des séances photo et vidéo de portraits exceptionnels. Que ce soit pour le mannequinat, les portraits classiques, les séances en famille, les animaux, les nouveau-nés ou la création de books modèles pour les agences, chaque instant sera capturé de manière à vous mettre en valeur.</p>
          <ul>
            <li>séance portrait</li>
            <li>Vidéo Modelling</li>
            <li>Réalisation de book modèle <span>pour des agences de mannequinat ou d'hôtessariat</span></li>
            <li>Boudoir</li>
          </ul>
          <TertiaryBtn text="Consulter nos tarifs" url="/services/b2c/portrait" />
        </div>
        <div className="service_picture">
        <Image alt="photo portrait - copyright Maxime Lapeyrere - Mannequin Aaricia Lemaire " src="/images/service_b2c/portrait1.png" width={400} height={600} className='img_exemple'  />
        </div>
      </div>
      <div className="b2c_service">
        <div className="service_picture">
          <Image alt="" src="/images/service_b2c/wedding1.png" width={400} height={600} />
        </div>
        <div className="service_presentation">
          <h3>Mariage</h3>
          <p>Vivez et revivez les moments les plus précieux de votre mariage grâce à des vidéos et aftermovies émouvants. Capturez la demande en fiançailles, immortalisez les souvenirs des mariés avant le grand jour et profitez d'une prestation complète photo et vidéo en collaboration avec une photographe spécialisée dans les mariages.</p>
          <ul>
            <li>Vidéos et Aftermovie du mariage</li>
            <li>Reportage photo du mariage</li>
            <li>Vidéo de la demande de fiançailles</li>
            <li>Vidéos et photos des fiancés avant le mariage</li>
          </ul>
          <TertiaryBtn text="En savoir plus" url="services/b2c/wedding" />
        </div>
      </div>
      <div className="b2c_service">
        <div className="service_presentation">
          <h3>Yachting et Automobile</h3>
          <p>Plongez dans un univers de luxe et de sophistication avec des vidéos et photos sur circuit, en navigation pour les yachts et avec la possibilité de prises de vue aériennes par drone. Mettez en valeur votre passion pour les véhicules et les expériences exclusives à travers des visuels époustouflants.</p>
          <ul>
            <li>vidéo de présentation du bateau ou du véhicule</li>
            <li>Film et photos du bateau en navigation</li>
            <li>Prises de vue aérienne par drone</li>
            <li>Photos et vidéos sur un rassemblement automobile</li>
            <li>Photo et vidéo sur circuit</li>
            <li>vidéo et photo lifestyle & luxury</li>
          </ul>
          <TertiaryBtn text="Consulter nos tarifs" url="" />
        </div>
        <div className="service_picture">
          <Image alt="" src="/images/service_b2c/yachting1.png" width={400} height={600}/>
        </div>
      </div>
      <div className="b2c_service">
        <div className="service_picture">
          <Image alt="" src="/images/service_b2c/immo1.png" width={400} height={600}/>
        </div>
        <div className="service_presentation">
          <h3>Immobilier</h3>
          <p>Valorisez vos biens immobiliers pour les ventes ou les locations saisonnières grâce à des vidéos immersives et des reportages photo de qualité. Offrez une perspective unique grâce à des prises de vue aériennes par drone qui mettent en évidence l'emplacement et les caractéristiques de chaque propriété.</p>
          <ul>
            <li>Vidéo promotionnelle pour une vente ou une location saisonnière <span>Différentes options disponibles (nocturne, plans aérien, environnement,...)</span></li>
            <li>Reportage Photo</li>
            <li>Prise de vue aérienne par drone</li>
            <li>visite virtuelle 360</li>
          </ul>
          <TertiaryBtn text="Consulter nos tarifs" url="" />
        </div>
      </div>
      <div className="cta_b2c_page">
        <p>Vous avez une autre idée de projet que vous souhaiteriez capturer en image?</p>
        <PrimaryBtn text="Contacte moi" ico="rocket" url="/svg/purplerocket.svg" />
      </div>
    </div>
  )
}

export default B2c