import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BoxWithPagination } from '~/components/Pagination'
export const Detail = () => {
  const { slug } = useParams()

  return (
    <BoxWithPagination>
      <Typography>{slug}</Typography>
    </BoxWithPagination>
  )
}
