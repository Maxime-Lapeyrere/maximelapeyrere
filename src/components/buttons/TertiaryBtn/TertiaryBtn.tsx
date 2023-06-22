import React from 'react'
import "./TertiaryBtn.scss"
import Link from 'next/link'

interface Props {
    text: string
    url : string
}

const TertiaryBtn = ({text, url}:Props) => {
  return (
    <Link href={url}>{text}</Link>
  )
}

export default TertiaryBtn