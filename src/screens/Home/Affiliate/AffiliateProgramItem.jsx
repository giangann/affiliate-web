import React from 'react'
import { Stack, Grid, Hidden, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'
import { Stars } from '~/components/Star'
import { Link } from 'react-router-dom'

const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  overflow: 'hidden'
}

export const AffiliateProgramItem = ({ data, ...props }) => {
  const { data_api } = data

  return (
    <Stack sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid container>
        <Grid item xs={10} zIndex="10">
          <Link to={`/websites/show/${data.id}`} style={{ textDecoration: 'none' }}>
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
              {data.name}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2} className="d-flex justify-content-end">
          <Stars rating={data_api?.rating} />
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
            src={data_api.profile_banner}
            alt="1"
          />
          <Hidden mdUp>
            <Button
              variant="outlined"
              sx={{ maxWidth: '100%', width: '95px' }}
              href={data.link}
              target="_blank"
            >
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
                sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold', ...webkitBox }}
              >
                {<div dangerouslySetInnerHTML={{ __html: data_api.description }} />}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
                {data?.reviews?.length} Reviews / {data.data_api.offer_count} Offers /{' '}
                {data_api.platform} / {data_api.payment_freq}
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                <Button variant="outlined" href={data.link} target="_blank">
                  Join
                </Button>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  )
}
