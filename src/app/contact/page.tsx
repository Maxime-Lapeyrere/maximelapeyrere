import React from 'react'
import Form from '@/components/contactForm/Form'
import "./contact.scss"

const Contact = () => {
  return (
    <section className='contactPage_container'>
      <div className="info"></div>
      <div className="form">
        <Form/>
      </div>
    </section>
  )
}

export default Contact