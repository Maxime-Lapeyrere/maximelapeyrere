import React from 'react'
import './simpleBorder.scss'

const SimpleBorder = ({children}) => {
  return (
    <div className='simpleBorder'>
        <div className="wrapper">
        {children}
        </div>
    </div>
  )
}

export default SimpleBorder