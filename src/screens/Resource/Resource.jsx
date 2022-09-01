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
      <Stack sx={{ backgroundColor: 'white', px: 3 }}>
        <Box sx={{ py: 2 }}>
          <TitleWithBorder sx={{ borderColor: orange[500] }} title="Resources" />
        </Box>
        <Box sx={{ mx: -3, backgroundColor: '#f1f5f8' }}>
          <Box sx={{ mx: 3 }}>
            <img className="py-2 w-100" src={AlgoAffiliatesImg} alt="Algo Affiliates" />
          </Box>
        </Box>
        <ResourceBlock withLabel={true} />
        <ResourceBlock />
      </Stack>
    </Stack>
  )
}

export { Resource }
