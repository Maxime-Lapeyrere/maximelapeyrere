import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./Anecdotes.scss"
import { bsid, montserrat } from '@/app/font'


const Anecdotes = () => {
  return (
    <section className='anecdotes_wrapper'>
        <h2 className={bsid.className}>Quelques anecdotes pour mieux me connaître:</h2>
        <div className="anecdote_bloc">
        <div className="anecdimg">
            <Image src="/images/anecdotes/image1.png" alt="" width={480} height={600}/>
            </div>
            <div className="anecdote_info">
                <h3 className={montserrat.className}>Je voyage dès que j&apos;en ai l&apos;occasion 🗺️</h3>
                <p className={montserrat.className}>
                    J&apos;ai traversé deux fois l&apos;Europe en stop en dormant chez l&apos;habitant. <br/>
                    J&apos;essaie de toujours visiter de nouveaux pays pour découvrir des cultures<br/>
                    que je ne connais pas. Bien évidemment avec un appareil photo<br/>
                    numérique ou argentique entre les mains car cela inspire mes créations.
                    <br/>
                    <br/>
                    prochain stop : Costa Rica &  Nicaragua en Août 2022 🌎<br/>
                    <br/>
                    J&apos;aime d&apos;ailleurs partager toutes mes aventures sur mon blog voyage<br/>
                    </p>
                    <Link href="/blog" target="_blank">Juste ici</Link>
            </div>
        </div>
        <div className="anecdote_bloc">
            <div className="anecdote_info">
                <h3 className={montserrat.className}>
                    La légende raconte<br/>
                    🌊 que je suis le fils caché de Poséidon 🔱
                </h3>
                <p className={montserrat.className}>
                    Quand je ne suis pas au bureau, vous me trouverez sûrement<br/> 
                    à bord d&apos;un voilier ou sur une planche de surf ou de kite-surf.<br/>
                    Sinon, je suis peut-être en plongée pour recenser des tortues marines<br/> 
                    à Madagascar ... qui sait ? 🤔   
                </p>
            </div>
            <div className="anecdimg">
            <Image src="/images/anecdotes/image2.png" alt="" width={450} height={300}/>
            </div>
        </div>
        <div className="anecdote_bloc">
        <div className="anecdimg">
        <Image src="/images/anecdotes/image3.png" alt="" width={450} height={300}/>
            </div>
            <div className="anecdote_info">
                <h3 className={montserrat.className}>
                    Lorsque je prends des vacances ...<br/> 
                    je deviens animateur de colonie de vacances 📢<br/> 
                </h3>
                <p className={montserrat.className}>
                    Que ce soit des colos sportives avec l&apos;UCPA ou des séjours itinérants<br/> 
                    avec des jeunes, c&apos;est toujours l&apos;occasion pour moi de combiner<br/>
                    passion et vocation au moins quatre semaines par an en France et à l&apos;étranger .     
                </p>
            </div>
        </div>
        <div className="anecdote_bloc">
            <div className="anecdote_info">
                <h3 className={montserrat.className}>
                    J&apos;aime sans cesse me fixer<br/> 
                    de nouveaux défis d&apos;aventure! 🏞️
                </h3>
                <p className={montserrat.className}>
                    Pour n&apos;en citer que quelques uns :<br/><br/>
                    <ul>
                        <li>🧗Partir bivouaquer dans la neige en haut des montagnes en plein hiver</li>
                        <li>🏍️Partir en raid moto off-Road sur le Trans Euro Trail</li>
                        <li>⛵Retaper un voilier avec les copains pour partir réaliser un film d&apos;aventure<br/>
                        en Norvège, Iles Féroé et Islande en mettant en avant le sport amateur<br/>
                        (surf, kitesurf, snowboard freeride) et l&apos;environnement.<br/>
                        <br/> 
                        </li>
                    </ul>
                    D&apos;ailleurs pour suivre et/ou soutenir le projet c&apos;est <a href="/highlatitudeproject">par ici</a>
                </p>
            </div>
            <div className="anecdimg">
            <Image src="/images/anecdotes/image4.png" alt="" width={450} height={300}/>
            </div>
        </div>
        <div className="anecdote_bloc">
        <div className="anecdimg">
        <Image src="/images/anecdotes/image5.png" alt="" width={450} height={357}/>
        </div>
            <div className="anecdote_info">
                <h3 className={montserrat.className}>“Il vaut mieux l&apos;avoir en image qu&apos;en pension” </h3>
                <p className={montserrat.className}>La phrase familiale qui a bercé ma jeunesse</p>
                <p className={montserrat.className}>
                En qualité de bon vivant et de grand sportif, j&apos;ai tendance à manger<br/>
                pour deux depuis petit. Mais désormais la cuisine c&apos;est moi et schmidt !<br/>
                <br/>
                Ce soir à dîner vous serez plutôt tenté par un poulet curry 🍛 ou des sushis 🍣?
                </p>
                <Link href="/" target="_blank"></Link>
            </div>
        </div>
        <div className="anecdote_bloc">
            <div className="anecdote_info">
                <h3 className={montserrat.className}>
                🎵 43738 minutes d&apos;écoute<br/>
                    de streaming musical en 2022 🎧
                </h3>
                <p className={montserrat.className}>
                La musique est une composante importante de ma vie et de mon métier,<br/> 
                je l&apos;écoute en live sur scène lors des captations mais elle m&apos;accompagne<br/>
                également au quotidien tout au long de mes journées.<br/>
                <br/>
                Scan la Sound Wave sous la photo sur Spotify, je te partage les pépites<br/>
                que j&apos;ai déniché et qui ont comblé mes oreilles en 2022     
                </p>
                <Link href="/" target="_blank"></Link>
            </div>
            <div className="anecdimg">
            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/55KyJyz4YkOCVrCoiv50Cb?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Anecdotes