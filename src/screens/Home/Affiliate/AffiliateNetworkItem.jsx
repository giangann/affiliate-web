import React from 'react'
import { Grid, Hidden, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'
import { Stars } from '~/components/Star'
import { Link } from 'react-router-dom'

const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  overflow: 'hidden'
}

export const AffiliateNetworkItem = ({ data, ...props }) => {
  const { data_api } = data ?? {}

  // console.log(data)
  // console.log({ data_api })

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
          src={data_api?.profile_banner}
          alt="1"
        />
        <Hidden mdUp>
          <Button
            sx={{ maxWidth: '100% !important', width: '95px' }}
            variant="contained"
            type="button-blue"
            href={data?.link}
            target="_blank"
          >
            Join
          </Button>
        </Hidden>
      </Grid>
      <Grid item xs={9} md={10}>
        <Grid container>
          <Grid item xs={8} md={10}>
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
                {data?.name}
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
              {data?.data_api?.rating}
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} className="d-flex justify-content-end">
            <Stars rating={data_api.rating} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              component="p"
              className="text-gray"
              sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold', ...webkitBox }}
            >
              {<div dangerouslySetInnerHTML={{ __html: data_api?.description }} />}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
              {data?.reviews?.length} Reviews / {data?.data_api?.offer_count} Offers /{' '}
              {data_api?.platform} / {data_api?.payment_freq}
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={2} className="d-flex align-items-center justify-content-end">
              <Button variant="contained" type="button-blue" href={data?.link} target="_blank">
                Join
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}
