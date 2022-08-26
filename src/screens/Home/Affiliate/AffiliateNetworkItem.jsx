import React from 'react'
import { Grid, Hidden, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'
import { Stars } from '~/components/Star'
import { Link } from 'react-router-dom'

export const AffiliateNetworkItem = ({ item }) => {
  console.log(item)

  return (
    <Grid container columnSpacing={2} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid
        item
        xs={3}
        md={2}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
      >
        <img
          style={{ width: '95px', height: 'auto', maxWidth: '100%' }}
          className="bg-white shadow-lg rounded"
          src={item.link_banner}
          alt="1"
        />
        <Hidden mdUp>
          <Button
            sx={{ maxWidth: '100% !important', width: '95px' }}
            variant="contained"
            type="button-blue"
          >
            Join
          </Button>
        </Hidden>
      </Grid>
      <Grid item xs={9} md={10}>
        <Grid container>
          <Grid item xs={8} md={10}>
            <Link to={`/${item.name}`}>
              <Typography
                component="a"
                className="no-underline"
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
                {item.name}
              </Typography>
            </Link>

            <Typography
              component="span"
              sx={{
                color: '#f60',
                border: '1px solid #f60',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="scale-sm ml-3 rounded px-1"
            >
              4.92 chua co data
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} className="d-flex justify-content-end">
            <Stars rating={2.5} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              component="p"
              className="text-gray"
              sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
            >
              Affmine is an affiliate network mostly based on
              <Hidden smDown>
                incentive space and offerwall solutions. We have large experience in affiliate mar
              </Hidden>
              ...
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
              {item.reviews.length} Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={2} className="d-flex align-items-center justify-content-end">
              <Button variant="contained" type="button-blue">
                Join
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}
