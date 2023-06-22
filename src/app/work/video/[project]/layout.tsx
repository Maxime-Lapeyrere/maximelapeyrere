import React, { Children } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategorySelector from '@/components/selector/CategorySelector'



export default function Work({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <div>
        {children}
    </div>
  )
}
