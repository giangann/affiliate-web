import React, { useState } from 'react'
import { Box } from '@mui/material'
import { grey, TextContent } from '~/styles'

const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  overflow: 'hidden'
}

export const BoxDescription = ({ desc, isStringToHtml }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Box px="1.25rem" py="0.75rem" backgroundColor={grey['bg']} position="relative">
      <TextContent sx={{ WebkitLineClamp: isExpanded ? 'unset' : '3', ...webkitBox }}>
        {isStringToHtml ? <div dangerouslySetInnerHTML={{ __html: desc }} /> : desc}
      </TextContent>

      <span
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.2rem',
          color: '#3490dc',
          fontSize: '.75rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}
        onClick={handleExpand}
      >
        [{isExpanded ? 'Hide' : 'More'}]
      </span>
    </Box>
  )
}
