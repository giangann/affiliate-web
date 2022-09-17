import React from 'react'
import { styled, Typography, Stack } from '@mui/material'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Home(props) {
  return (
    <Stack spacing={3}>
      <Reels />
      <Affiliate listBanner={props?.listBanner} />
    </Stack>
  )
}

export const AlibabaText = styled(Typography)({
  fontFamily: 'open sans',
  fontWeight: 500,
  fontSize: { xs: '10px', sm: '12px', md: '16px' }
})

export { Home }
