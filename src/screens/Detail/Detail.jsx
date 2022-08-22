import React from 'react'
import { useParams } from 'react-router-dom'
export const Detail = () => {
  const { slug } = useParams()

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}
