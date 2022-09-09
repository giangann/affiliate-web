import React from 'react'
import { TextContent, red } from '~/styles'
import { Tag } from './Tag'

export const TagScore = ({ label, score, ...props }) => {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <TextContent
        sx={{
          textTransform: 'uppercase',
          color: '#8795a1',
          fontSize: {
            sm: '0.75rem',
            xs: '0.6rem'
          }
        }}
      >
        {label}
      </TextContent>
      <Tag label={score} sx={{ color: red['text'] }} />
    </span>
  )
}
