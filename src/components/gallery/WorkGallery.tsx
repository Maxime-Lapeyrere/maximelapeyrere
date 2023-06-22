import React from 'react'
import ProjectCard from '../cards/ProjectCard/ProjectCard'
import "./WorkGallery.scss"
import SecondaryBtn from '../buttons/SecondaryBtn/SecondaryBtn'
import Showreel from '@/containers/home/showreel/Showreel'
import MainTitle from '../titles/MainTitle/MainTitle'

const cards = [
    {
      id:1,  
      title:"Ali Express Festival" ,
      location:"Terminal 7 - Paris, Fr" ,
      skills:[ 
        "photo",
        "vidéo"
      ],
      img:"/images/xavier.png"
    },
    {
      id:2, 
      title:"Ali Express Festival" ,
      location:"Terminal 7 - Paris, Fr" ,
      skills:[ 
        "photo",
        "vidéo"
      ],
      img:"/images/xavier.png"
    },
    {
      id:3, 
      title:"Ali Express Festival" ,
      location:"Terminal 7 - Paris, Fr" ,
      skills:[ 
        "photo",
        "vidéo"
      ],
      img:"/images/xavier.png"
    },
    {
      id:4, 
      title:"Ali Express Festival" ,
      location:"Terminal 7 - Paris, Fr" ,
      skills:[ 
        "photo",
        "vidéo"
      ],
      img:"/images/xavier.png"
    },
    {
      id:5, 
      title:"Ali Express Festival" ,
      location:"Terminal 7 - Paris, Fr" ,
      skills:[ 
        "photo",
        "vidéo"
      ],
      img:"/images/xavier.png"
    },
  ]

const WorkGallery = () => {
  return (
    <section className='work_section'>

        <MainTitle h1="Portfolio" h2="showreel et derniers projets" />
        <Showreel/>

        <div className='gallery_container'>
            {cards.map((card)=>(
                <ProjectCard key={card.id}  title={card.title} location={card.location} skills={card.skills} img="/images/xavier.png" />
                ))}
        </div>

        <div className="work_ctas">
           <SecondaryBtn text="Production Audiovisuelle" url="/work/video" ico="/svg/camera.svg"/>
           <SecondaryBtn text="Portfolio Photo" url="/work/photo" ico="/svg/art-gallery.svg"/>
        </div>
    </section>
  )
}

export default WorkGallery