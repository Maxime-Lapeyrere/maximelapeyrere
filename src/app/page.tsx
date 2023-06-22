import './home.scss'
import WorkGallery from '@/components/gallery/WorkGallery'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import { bsd } from './font'


export default function Home() {
  return (
    <>
    <section className="hero">
    <div className="herotext">
      <h1 className={bsd.className}>
      Salut c’est Max, 👋🏻
      photographe et vidéaste indépendant.
      Basé à Paris, à Genève et en Bretagne. Passionné par l’art de capturer les émotions et les instants de vie
      </h1> 

      <PrimaryBtn text="Parle moi de ton projet" ico="/svg/purplerocket.svg" url="/svg/purplerocket.svg" />
      <PrimaryBtn text="visite ma boutique" ico="/svg/purplerocket.svg" url="/svg/purplerocket.svg" />
    </div>
    </section>
    <WorkGallery/>
    </>
  )
}
