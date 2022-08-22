import React from 'react'
import { styled, Typography, Stack } from '@mui/material'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Home() {
  return (
    <Stack spacing={3}>
      <Reels />
      <Affiliate />
    </Stack>
  )
}

export const AlibabaText = styled(Typography)({
  fontFamily: 'alibaba-sans',
  fontWeight: 600,
  fontSize: { xs: '10px', sm: '12px', md: '14px' }
})

export { Home }
