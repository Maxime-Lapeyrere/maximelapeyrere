import React from 'react'
import './BorderlineAround.scss'

function BorderlineAround({children}) {
  return (
    <div className="wrapper">
      <div className="borderLine"/>
      <div className="children_wrapper">
          {children}
      </div>
</div>
  )
}

export default BorderlineAround
