import { Box, Link } from '@mui/material'
import React from 'react'
import { baseColor } from '~/styles'

function CarouselItem({ ...props }) {
  return (
    <Link target="_blank" href={props.image.path_to_website} underline="none" color="inherit">
      <Box
        component="img"
        src={props.image.link_of_image ?? ''}
        alt="Carousel Item"
        sx={{
          width: { xs: '100%' },
          border: `5px solid ${baseColor.blue}`
        }}
      />
    </Link>
  )
}

export default CarouselItem
