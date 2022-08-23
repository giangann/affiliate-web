import React from 'react'
import { TextContent, red } from '~/styles'
import { Tag } from './Tag'

export const TagScore = ({ lable, score }) => {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <TextContent sx={{ textTransform: 'uppercase', color: '#8795a1' }}>{lable}</TextContent>
      <Tag label={score} sx={{ color: red['text'] }} />
    </span>
  )
}
