import Link from 'next/link'
import React from 'react'
import { JsonObjectExpression } from 'typescript'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function Blog(){

  const data = await getData()
  
  return (
    <div>
      {data.map((item:any)=>(
          <Link href={`/blog/${item.id}`}key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </Link>
      ))}
    </div>
  )
}
