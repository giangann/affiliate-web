import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getAllWebsites } from '~/apis'
import { Grid, Typography, Stack, Box, Avatar, Link, Button } from '@mui/material'

import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { baseColor } from '~/styles'
import { AffiliateNetworkItem } from '../Home'
import { NetworkItem } from './NetworkItem'
import AddNetworkDialog from './AddNetworkDialog'

function Dashboard() {
  const { isLoading, error, data: allWebsites } = useQuery('allWebsites', () => getAllWebsites())

  const [openAddDialog, setOpenAddDialog] = useState(false)

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false)
  }

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true)
  }
  useEffect(() => {
    console.log('callback useEffect', allWebsites, isLoading, error)
  }, [allWebsites, isLoading, error])
  return (
    <>
      <BoxWithHeader
        mainColor={baseColor.blue}
        data={allWebsites}
        title={() => (
          <Grid container>
            <Grid item xs={12} sx={{ justifyContent: 'flex-start' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
                paddingY={3}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  All current networks
                </Typography>
                <Button variant="contained" onClick={handleOpenAddDialog}>Add network</Button>
              </Stack>
            </Grid>
          </Grid>
        )}
      >
        <NetworkItem mainColor={baseColor.blue} />
      </BoxWithHeader>

      {/* Add network dialog */}
      <AddNetworkDialog
        open={openAddDialog}
        handleClose={handleCloseAddDialog}
        title="Add Network"
      />
    </>
  )
}

export default Dashboard
