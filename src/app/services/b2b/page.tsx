import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TertiaryBtn from '@/components/buttons/TertiaryBtn/TertiaryBtn'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import '../b2c/b2c.scss'
import { bsid, montserrat } from '@/app/font'
import MainTitle from '@/components/titles/MainTitle/MainTitle'

const B2b = () => {
  return (
    <div className="b2b_wrapper">

    <div className={`b2c_services_wrapper ${montserrat.className}`}>
      <div className="b2c_service">
        <div className="service_presentation">
          <h3>Corporate</h3>
          <p>tbd</p>
          <ul>
            <li>Interview dirigeants d&apos;entreprises et manager</li>
            <li>Vidéo de présentation d&apos;entreprise</li>
            <li>Captation vidéo et photo évènementielle entreprise<span>salons professionnels/stands, séminaire, live event, Afterwork, ...</span></li>
            <li>Aftermovie de vos évènements</li>
            <li>Communication vidéo pour les réseaux sociaux</li>
            <li>Reportage photo en entreprise</li>
            <li>Business headshots et photos de vos équipes</li>
          </ul>
        </div>
        <div className="service_picture">
          <Image alt="" src="/images/service_b2c/immo1.png" width={400} height={600}/>
        </div>      
        </div>
      <div className="b2c_service">
      <div className="service_picture">
          <Image alt="" src="/images/service_b2c/immo1.png" width={400} height={600}/>
        </div>        <div className="service_presentation">
          <h3>Tourisme - Hôtellerie, restauration, activités et patrimoine</h3>
          <p>tbd</p>
          <ul>
            <li>Vidéo de présentation de votre établissement</li>
            <li>Vidéo promotionnelle du territoire</li>
            <li>Contenus courts et régulier pour promouvoir votre établissement sur les réseaux sociaux - <span>formules et abonnements disponibles</span></li>
            <li>Photographie culinaire</li>
            <li>Photos de votre établissement pour votre site, vos outils de réservation et vos réseaux sociaux</li>
          </ul>
        </div>
      </div>
      <div className="b2c_service">
        <div className="service_presentation">
          <h3>Évènementiel - Industrie musicale & sport concert, festival, dj set,  milieu associatif & étudiant</h3>
          <p>tbd.</p>
          <ul>
            <li>aftermovie et vidéos de promotion</li>
            <li>Diffusion live réseaux sociaux et captation multicam sur l&apos;évènement </li>
            <li>Photos des prestations live (Concert, Dj Set)</li>
            <li>Clip musical</li>
            <li>Photo et vidéo sur circuit</li>
            <li>Vidéo/photo lifestyle, interview et short content artiste et sportifs</li>
          </ul>
        </div>
        <div className="service_picture">
          <Image alt="" src="/images/service_b2c/immo1.png" width={400} height={600}/>
        </div>      
        </div>
      <div className="b2c_service">
        <div className="service_presentation">
          <h3>Publicité</h3>
          <p>Tbd</p>
          <ul>
            <li>Promotion d&apos;un produit ou service pour les réseaux sociaux (tik tok, reels, shorts) -<span>format Snack content / Vidéo verticale</span></li>
            <li>Commercial d&apos;un produit ou service en lumière et décor naturel ou en studio</li>
            <li>Photo packshot produit en studio ou lumière naturelle</li>
          </ul>
        </div>
      </div>
      <div className="cta_b2c_page">
        <p>Vous avez une autre idée de projet que vous souhaiteriez capturer en image?</p>
        <PrimaryBtn text="Demander un devis" ico="/svg/purplerocket.svg" url="/svg/purplerocket.svg" />
      </div>
    </div>
    <div className="workflow_wrapper">
    <MainTitle  h1="Workflow" h2="Voici comment je travaille" />
    <div className={`workflow_illu ${montserrat.className}`}>
      <div className="workflow_col">
        <div className="workblocttl">
          <h3>Photographie</h3>
        </div>
        <div className="workbloc">
          <h4>l&apos;Avant Shooting</h4>
          <p>Creative Brief</p>
          <p>Rencontre informelle <span>pour un shooting individuel</span></p>
          <p>Moodboard</p>
          <p>Direction Artistique</p>
          <p>Casting et repérage</p>
          <p>Plannification</p>
        </div>
        <div className="workbloc">
          <h4>Shooting</h4>
          <p>setup lights <span>pour un shooting en studio</span></p>
          <p>composition <span>pour les packshots produit</span></p>
          <p>Réalisation des prises de vue</p>
        </div>
        <div className="workbloc">
          <h4>Post-Production</h4>
          <p>Sélection</p>
          <p>Correction d&apos;exposition</p>
          <p>Retouches mineures</p>
          <p>en option:</p>
          <p>Incrustation et montage photo</p>
          <p>Impression des photos</p>
          <p>Réalisation d&apos;un livre photo</p>
        </div>
      </div>
      <div className="workflow_col">
        <div className="workline"></div>
        
      </div>
      <div className="workflow_col">
        <div className="workblocttl">
          <h3>Vidéo</h3>
        </div>
        <div className="workbloc">
          <h4>Pre-Production - Concept</h4>
          <p>Creative Brief</p>
          <p>Moodboard</p>
          <p>Direction artistique</p>
          <p>Script</p>
          <p>Casting et Repérage</p>
          <p>Plannification</p>
        </div>
        <div className="workbloc">
          <h4>Production - Réalisation - Captation</h4>
          <p>Lights setup</p>
          <p>Audio Reccording</p>
          <p>Filming</p>
          <p>Drone Shots</p>
          <p>Steadycam</p>
        </div>
        <div className="workbloc">
          <h4>Post-Production</h4>
          <p>Derush</p>
          <p>Montage et étalonnage</p>
          <p>Coloriométrie</p>
          <p>Sound Design</p>
          <p>Motion Design</p>
          <p>VFX</p>
          <p>Corrections et retours clients <span>3 incluses, en supplément au-delà</span></p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default B2b