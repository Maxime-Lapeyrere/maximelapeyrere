import React from 'react'
import Image from 'next/image'
import "./AboutTeam.scss"
import { bsid, montserrat } from '@/app/font'

const members = [
    {
        id:1,
        name: "Adrien M.",
        role: "vidéaste",
        picProfile: "/images/adrienm.png"
    },
    {
        id:2,
        name: "Claire D.",
        role: "Photographe",
        picProfile: ""
    },
    {
        id:3,
        name: "Caroline L.",
        role: "Directrice Artistique",
        picProfile: ""
    },
    {
        id:4,
        name: "Valentin L.",
        role: "Télépilote drone Ciné et FPV",
        picProfile: ""
    },

]

const AboutTeam = () => {
  return (
    <section className='about_team_wrapper'>
        <h2 className={bsid.className}>L&apos;équipe qui m&apos;accompagne</h2>
        <p className={montserrat.className}>
            Il peut arriver que les projets que vous me confiez nécessitent l&apos;intervention de plusieurs personnes.<br/> 
            C&apos;est pour cela que je m&apos;accompagne d&apos;une équipe de confrères et consœurs de confiance se démarquant par l&apos;excellence de leur travail
        </p>

        <div className="members_display_bloc">
            {members.map((member)=>(
                <div className="member_card" key={member.id}>
                    <Image className='team_profile_pic' src={member.picProfile} alt={`${member.name} profile picture`} width={200} height={200}/>
                    <div className="member_info">
                        <h3 className={montserrat.className}>{member.name}</h3>
                        <h4 className={montserrat.className}>{member.role}</h4>
                    </div>
                </div>
            ))}
        </div>


    </section>
  )
}

export default AboutTeam