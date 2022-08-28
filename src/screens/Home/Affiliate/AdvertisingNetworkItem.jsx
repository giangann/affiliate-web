import React from 'react'
import { Button } from '~/components/Buttons'
import { Stack, Grid, Typography, Hidden } from '@mui/material'
import { Stars } from '~/components/Star'
export const AdvertisingNetworkItem = () => {
  return (
    <Stack sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            component="a"
            className="no-underline"
            href="/affmine"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: '#f60'
              },
              color: '#2779bd',
              marginRight: 1,
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Affmine
          </Typography>
        </Grid>
        <Grid item xs={2} className="d-flex justify-content-end">
          <Stars rating={2.5} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          md={2}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        >
          <img
            style={{ width: '95px', height: 'auto', maxWidth: '100%' }}
            className="bg-white shadow-lg rounded"
            src="https://apimg.net/sponsors/index/af3d653df304f38cdc0985da44aa50c9.jpg"
            alt="1"
          />
          <Hidden mdUp>
            <Button sx={{ maxWidth: '100% !important', width: '95px' }} variant="outlined">
              Join
            </Button>
          </Hidden>
        </Grid>
        <Grid item xs={9} md={10}>
          <Grid container>
            <Grid item xs={12} md={10}>
              <Typography
                component="p"
                className="text-gray"
                sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
              >
                Affmine is an affiliate network mostly based on incentive space and offerwall
                solutions. We have large experience in affiliate mars in the moon and ...
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
                52 Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                <Button variant="outlined">Join</Button>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  )
}
