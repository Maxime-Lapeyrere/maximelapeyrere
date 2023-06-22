import React, { Children } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategorySelector from '@/components/selector/CategorySelector'
import B2b from '@/app/services/b2b/page'
import B2c from './b2c/page'
import "./service.scss"
import { bsid, montserrat } from '../font'
import { Montserrat } from 'next/font/google'
import ProjectTypeBanner from '@/components/cards/ProjectTypeBanner/ProjectTypeBanner'

export default function Services({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <div className='service_page_container'>
        <div className="presentation_wrapper">
          <ProjectTypeBanner img="/images/pano_nyc.jpg" title='Mes services de production vidéo et photographie'/>
        <p className={montserrat.className}>
            Je vous garantie un accompagnement complet dans la réalisation de votre projet vidéo<br/> 
            des premières étapes de conception et pre production jusqu’à la post production et distribution des médias.<br/>
            <br/> 
            Bien qu’habituellement j’intervienne sur l’ensemble de la chaîne de production<br/>  
            (Pre prod {'>'} tournage {'>'} post prod {'>'} distribution), je peux également intervenir de manière ponctuelle sur vos projets.<br/>  
            Je peux donc assurer chaque phase de la réalisation individuellement comme la captation, le montage/étalonnage<br/>  
            ou bien en amont la réflexion au niveau de la direction artistique.<br/> 
            <br/> 
            J’ai pour habitude de travailler en équipe et cela vous assurera une solution parfaitement adaptée<br/>  
            et sur-mesure à votre besoin du moment.<br/> 
            <br/> 
            J’interviens auprès de certains domaines d’expertises mais je suis évidemment ouvert et impatient de tout nouveau<br/> 
            projet que vous pourriez me confier.
        </p>
        </div>
        <CategorySelector first="Particulier" firstLink="/services/b2c" second="Professionnel" secondLink="/services/b2b" />
        {children}
    </div>
  )
}
