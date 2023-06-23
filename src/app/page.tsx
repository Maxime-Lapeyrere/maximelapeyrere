import './home.scss'
import WorkGallery from '@/components/gallery/WorkGallery'
import AboutSection from '@/containers/home/about/AboutSection'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import { bsd } from './font'


export default function Home() {
  return (
    <>
    <section className="hero">
    <div className="herotext">
      <h1 className={bsd.className}>
      Salut c&apos;est Max, 👋🏻
      photographe et vidéaste indépendant.
      Basé à Paris, à Genève et en Bretagne. Passionné par l&apos;art de capturer les émotions et les instants de vie.
      <br/>
      Mon site se refait une beauté et n&apos;est donc pas complet, il revient dans moins d&apos;une semaine!
      </h1> 
      <div className="cta_bloc">
      <PrimaryBtn text="Parle moi de ton projet" ico="/svg/purplerocket.svg" url="/svg/purplerocket.svg" />
      <PrimaryBtn text="visite ma boutique" ico="/svg/purplerocket.svg" url="/svg/purplerocket.svg" />
      </div>
    </div>
    </section>
    <WorkGallery/>
    <AboutSection/>
    </>
  )
}
