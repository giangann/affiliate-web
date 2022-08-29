import { Box } from '@mui/material'
import React from 'react'
import { baseColor } from '~/styles'

function CarouselItem({ ...props }) {
  return (
    <Box
      component="img"
      src={props.image ?? ''}
      alt="Carousel Item"
      sx={{ width: { xs: '100%', md: '96%' }, border: `5px solid ${baseColor.blue}` }}
    />
  )
}

export default CarouselItem
