import React from 'react'
import { Box } from '@mui/material'

import fullStar from '~/assets/svgs/stars/full_star.svg'
import halfStar from '~/assets/svgs/stars/half_star.svg'
import noStar from '~/assets/svgs/stars/no_star.svg'

export const Stars = (props) => {
  const isDecimal = props.rating % 1 !== 0
  const rating = Math.floor(props.rating)
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<Star link={fullStar} key={i} />)
  }
  if (isDecimal) {
    stars.push(<Star link={halfStar} key={rating} />)
  }
  for (let i = !isDecimal ? rating : rating + 1; i < 5; i++) {
    stars.push(<Star link={noStar} key={i} />)
  }

  return <Box sx={{ display: 'flex', alignItems: 'center' }}>{stars}</Box>
}

const Star = ({ link }) => {
  return <Box component="img" src={link} alt="star" />
}
