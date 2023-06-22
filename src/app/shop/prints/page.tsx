import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Image src='/images/img1.png' width={85} height={127.5} loading='lazy' alt=''/>
    </div>
  )
}

export default page