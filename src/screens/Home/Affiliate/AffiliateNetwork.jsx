import { Avatar, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import { Button } from '~/components/Buttons'

const AffiliateNetwork = () => {
  return (
    <React.Fragment>
      <Grid container padding={3}>
        <Grid item xs={6} sx={{ justifyContent: 'center' }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
              <DiamondIcon />
            </Avatar>
            <Typography variant="h1" sx={{ fontSize: '0.9rem', lineHeight: 1, fontWeight: 'bold' }}>
              Premiun Networks
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" className="h-100">
            <Button variant="contained" type="button-blue">
              Top Rated
            </Button>
            <Button variant="contained" type="button-gray">
              Newest
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { AffiliateNetwork }
