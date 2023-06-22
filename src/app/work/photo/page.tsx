import React from 'react'
import Image from 'next/image'
import "./photo.scss"

import CategorySelector from '@/components/selector/CategorySelector'

import photoList1 from "../../../lib/photolist1.json"
import photoList2 from "../../../lib/photolist2.json"
import photoList3 from "../../../lib/photolist3.json"

const Photo = () => {
  return (
    <section>
        <CategorySelector first="portfolio photo" firstLink="/work/photo" second="production audiovisuelle" secondLink="/work/video" />
      <div className='photofolio'>
        <div className='photo_col'>
          {photoList1.map((photo)=>(
            <div key={photo.id} className="photo_container">
              <Image 
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className='photo_img'
              loading='lazy'
              />
            </div>
          ))}
        </div>
        <div className='photo_col'>
        {photoList2.map((photo)=>(
          <div key={photo.id} className="photo_container">
              <Image 
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className='photo_img'
              loading='lazy'
              />
            </div>
          ))}
        </div>
        <div className='photo_col'>
        {photoList3.map((photo)=>(
          <div key={photo.id} className="photo_container">
              <Image 
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className='photo_img'
              loading='lazy'
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Photo