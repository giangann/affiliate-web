import React from 'react'
import { Box } from '@mui/material'

export const Icon = ({ src, ...props }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: '12px',
        height: '12px',
        ...props.sx
      }}
    />
  )
}
