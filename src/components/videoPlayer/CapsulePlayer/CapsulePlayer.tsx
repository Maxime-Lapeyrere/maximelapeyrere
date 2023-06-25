import React from 'react'
import './CapsulePlayer.scss'
import SimpleBorder from '../../borders/simpleBorder/SimpleBorder'
import TurningText from '../../titles/turningText/TurningText'

const CapsulePlayer = (props:any) => {
  return (
    <div className='capsuleWrapper'>
    <div className='capsulePlayer'>
      <SimpleBorder>
        <video loop autoPlay muted className='showreel_player'>
          <source src="/video/RBCYMI.mp4" type="video/mp4" />
	      </video>
      </SimpleBorder>
    </div>
    <div className="turn">
    <TurningText setOpenPlayer={props.setOpenPlayer}/>
    </div>
    </div>
  )
}

export default CapsulePlayer