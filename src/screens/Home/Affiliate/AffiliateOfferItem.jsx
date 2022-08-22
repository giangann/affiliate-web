import React from 'react'
import { Grid, Typography, Hidden } from '@mui/material'
import { Button } from '~/components/Buttons'
export const AffiliateOfferItem = () => {
  return (
    <Grid container sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid
        item
        xs={1.5}
        md={1}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <img
          style={{ width: '24px', height: '24px' }}
          className="mt-1 bg-white rounded-full d-flex justify-content-center align-items-center shadow"
          src="https://apimg.net/networks/logo/18640-square.jpg?t=32224421"
          alt="1"
        />
        <Typography
          component="p"
          className="text-gray"
          sx={{ fontSize: '0.75rem', color: '#1f9d55', fontWeight: 'bold' }}
        >
          $0.61
        </Typography>
      </Grid>
      <Grid item xs={10.5} md={11}>
        <Grid container>
          <Grid item xs={10} md={8}>
            <Typography sx={{ fontSize: '0.75rem', color: '#3d4852', fontWeight: 'bold' }}>
              USA Cash Finder - US (US), [CPL], Business, Insurances, assurance, security, safe
            </Typography>
            <Typography
              component="p"
              className="text-gray"
              sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
            >
              MyLead · Business · US
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={2} className="d-flex align-items-center justify-content-center">
              <Typography
                component="p"
                className="text-gray"
                sx={{ fontSize: '0.75rem', color: '#1f9d55', fontWeight: 'bold' }}
              >
                $0.61
              </Typography>
            </Grid>
          </Hidden>
          <Grid item xs={2} className="d-flex align-items-center justify-content-end">
            <Button variant="outlined">Run Offer</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
