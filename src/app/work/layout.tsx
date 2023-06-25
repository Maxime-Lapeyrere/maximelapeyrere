import React from 'react'
import "../services/service.scss"


export default function Work({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <div className='service_page_container'>
        {children}
    </div>
  )
}
