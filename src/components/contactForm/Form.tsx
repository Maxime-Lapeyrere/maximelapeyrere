import React from 'react'
import './Form.scss'
import { bsd, montserrat } from '@/app/font'

const Form = () => {
  return (
    <form className={`form_container ${montserrat.className}`}>
      <input type="text" className={`input ${montserrat.className}`} placeholder='Nom' aria-label='name' required={true}/>
      <input type="text" className={`input ${montserrat.className}`} placeholder='Prénom' aria-label='surname' required={true}/>
      <input type="email" name="email" id="email" className={`input ${montserrat.className}`} placeholder='Email' aria-label='email' required={true}/>
      <input type="tel" name="tel" id="tel" className={`input ${montserrat.className}`} placeholder='Téléphone' aria-label='tel' required={true}/>
      <div className="radioBtn_container">
        <p>Vous êtes?</p>
        <div className="selector_btns">
        <div className="radioBtn">
          <p><input type="radio" name="clientCategory" id="b2c" />Un particulier </p>
        </div>
        <div className="radioBtn">
          <p><input type="radio" name="clientCategory" id="b2b" />Un professionnel</p>
        </div>
        </div>
      </div>
      <textarea name="" id="" cols={30} rows={10} className={`textArea ${montserrat.className}`} placeholder='Votre message'></textarea>
      <button type="submit">Envoyer</button>
      
      
      


    </form>
  )
}

export default Form