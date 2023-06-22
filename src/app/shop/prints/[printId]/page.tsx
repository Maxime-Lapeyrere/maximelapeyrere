"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import LeftArrow from '../../../../../public/svg/left-arrow.svg'
import RightArrow from '../../../../../public/svg/right-arrow.svg'


const page = () => {

    const print = {title:"Big Apple Illusion" ,dimensions:"20x30", number:"1/10", price:75, desc:"lorem ipsum sin dolor amet ...", src:"", src2:""}

    const [dimIsSelected, setDimIsSelected]= useState(false)




  return (
    <section className='print_page'>
        <div className="print_display">
            <div className="print_thumbnails_col">
                <Image src='/images/img1.png' width={85} height={127.5} loading='lazy' alt=''/>
                <Image src='/images/img2.png' width={85} height={127.5} loading='lazy' alt=''/>
            </div>
            <div className="print_main_display">
                <Image src='/images/img1.png' width={400} height={600} loading='lazy' alt=''/>
                <div className="arrows_controls">
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
        </div>
        <div className="print_infos">
            <div className="print_title">
                <h1>{print.title}</h1>
                <h2 className='print_specs'>{print.dimensions} {print.number}</h2>
                <h2 className='print_specs'>{dimIsSelected? `${print.price}€`: 'à partir de 75€'}</h2>
            </div>
            <p className="print_desc">{print.desc}</p>
            <div className="size_selection">
                <label form='size-select'>Dimensions:</label>
                <select name="size" id="size-select" onClick={()=>setDimIsSelected(true)}>
                    <option value="">--Please choose an option--</option>
                    <option value="10">10x15 - 17.5€</option>
                    <option value="18">18x24 - 45€</option>
                    <option value="20">20x30 - 75€</option>
                    <option value="30">30x45 - 115€</option>
                    <option value="40">40x60 - 145€</option>
                    <option value="50">50x75 - 215€</option>
                    <option value="60">60x90 - 300€</option>
                    <option value="70">70x105 - 450€</option>
                    <option value="80">80x120 - 600€</option>
                </select>
            </div>
            <div className="size_selection">
                <label form="quantity">Quantité:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="10"/>
            </div>
            <button>Ajouter au panier</button>
        </div>
    </section>
  )
}

export default page