import { Box, Stack } from '@mui/material'
import React from 'react'
import { TitleWithBorder } from '~/components/Typographys'
import { orange } from '~/styles'
import Reels from '../Home/Reels'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { ResourceBlock } from './ResourceBlock'

const Resource = () => {
  return (
    <Stack spacing={3}>
      <Reels />
      <Stack sx={{ backgroundColor: 'white', px: 3 }}>
        <Box sx={{ py: 2 }}>
          <TitleWithBorder sx={{ borderColor: orange[500] }} title="Resources" />
        </Box>
        <img className="block" src={AlgoAffiliatesImg} alt="Algo Affiliates"></img>
        <ResourceBlock />
        <ResourceBlock withLabel={true}/>
      </Stack>
    </Stack>
  )
}

export { Resource }
