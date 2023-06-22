"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SubPageSelector from '../buttons/SubPageSelector/SubPageSelector'
import "./categorySelector.scss"

interface Props {
  first: string
  second: string
  firstLink:string
  secondLink : string
}


const CategorySelector = ({first, firstLink, second, secondLink}:Props) => {
 
  const [isFirstActive, setIsFirstActive] = useState(false)
  const [isSecondActive, setIsSecondActive] = useState(true)
  
  return (
   
      <div className="selector_bloc">
      <SubPageSelector text={first} link={firstLink} status={`subpage_selector ${isFirstActive? "active" : ""}`} action={()=>{setIsFirstActive(true);setIsSecondActive(false)}}/>
      <SubPageSelector text={second} link={secondLink} status={`subpage_selector ${isSecondActive? "active" : ""}`} action={()=>{setIsFirstActive(false);setIsSecondActive(true)}}/>
      </div>

  )
}

export default CategorySelector