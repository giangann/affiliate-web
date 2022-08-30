import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllWebsites } from '~/apis'
import { Grid, Typography, Stack, Box, Avatar, Link } from '@mui/material'

import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { baseColor } from '~/styles'
import { AffiliateNetworkItem } from '../Home'
import { NetworkItem } from './NetworkItem'

function Dashboard() {
  const { isLoading, error, data: allWebsites } = useQuery('allWebsites', () => getAllWebsites())

  useEffect(() => {
    console.log('callback useEffect', allWebsites, isLoading, error)
  }, [allWebsites, isLoading, error])
  return (
    <BoxWithHeader
      mainColor={baseColor.blue}
      data={allWebsites}
      title={() => (
        <Grid container>
          <Grid item xs={12} sx={{ justifyContent: 'flex-start' }}>
            <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
                All current networks
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      )}
    >
      <NetworkItem mainColor={baseColor.blue} />
    </BoxWithHeader>
  )
}

export default Dashboard
