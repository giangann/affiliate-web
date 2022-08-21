import { Avatar, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import { Button } from '~/components/Buttons'
import { Filter } from './Filter'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { Stars } from '~/components/Star'

const data = [1, 2, 3, 4, 5]

const AffiliateNetwork = () => {
  return (
    <React.Fragment>
      <Stack paddingX={3}>
        <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
          <Grid item xs={6} sx={{ justifyContent: 'center' }}>
            <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
              <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
                <DiamondIcon />
              </Avatar>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
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
        <Filter />
        <img class="block" src={AlgoAffiliatesImg} alt="Algo Affiliates"></img>
        <Stack paddingY={3}>
          {data.map((items, index) => (
            <Grid container key={index} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
              <Grid item xs={2}>
                <img
                  style={{ width: '95px', height: '80px' }}
                  className="bg-white shadow-lg rounded"
                  src="https://apimg.net/sponsors/index/af3d653df304f38cdc0985da44aa50c9.jpg"
                  alt="1"
                />
              </Grid>
              <Grid item xs={10}>
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
                      4.92
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className="d-flex justify-content-end">
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
                      Affmine is an affiliate network mostly based on incentive space and offerwall
                      solutions. We have large experience in affiliate mar...
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
                      52 Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                    <Button variant="contained" type="button-blue">
                      Join
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <div className="d-flex justify-content-center pt-3">
            <Button
              sx={{
                color: '#f60',
                border: '1px solid #f60',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="scale-sm ml-3 rounded px-1"
            >
              See more affiliate networks
            </Button>
          </div>
        </Stack>
      </Stack>

      <Stack paddingX={3}>
        <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
          <Grid item xs={6} sx={{ justifyContent: 'center' }}>
            <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
                Affiliate Offers
              </Typography>
              <Typography
                sx={{
                  fontStyle: 'italic',
                  color: '#b8c2cc',
                  fontSize: '.75rem',
                  fontWeight: 'bold'
                }}
              >
                Data Provided by Affplus.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" className="h-100">
              <Button variant="contained" type="button-blue">
                Top Converting
              </Button>
              <Button variant="contained" type="button-gray">
                Lastest
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Stack paddingY={3}>
          {data.map((item, index) => (
            <Grid container key={index} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
              <Grid item xs={1}>
                <img
                  style={{ width: '24px', height: '24px' }}
                  class="mt-1 bg-white rounded-full d-flex justify-content-center align-items-center shadow"
                  src="https://apimg.net/networks/logo/18640-square.jpg?t=32224421"
                  alt="1"
                />
              </Grid>
              <Grid item xs={11}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography sx={{ fontSize: '0.75rem', color: '#3d4852', fontWeight: 'bold' }}>
                      USA Cash Finder - US (US), [CPL], Business, Insurances, assurance, security,
                      safe
                    </Typography>
                    <Typography
                      component="p"
                      className="text-gray"
                      sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
                    >
                      MyLead · Business · US
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className="d-flex align-items-center justify-content-center">
                    <Typography
                      component="p"
                      className="text-gray"
                      sx={{ fontSize: '0.75rem', color: '#1f9d55', fontWeight: 'bold' }}
                    >
                      $0.61
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                    <Button variant="outlined">Run Offer</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <div className="d-flex justify-content-center">
            <Button
              sx={{
                color: '#2779bd',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="ml-3 rounded px-1"
            >
              See more offers on affplus
            </Button>
          </div>
        </Stack>
      </Stack>

      <Stack paddingX={3}>
        <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
          <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
            <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
              Advertising Networks
            </Typography>
          </Stack>
        </Grid>
        <Stack>
          {data.map((item, index) => (
            <Stack key={index} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
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
              <Grid container>
                <Grid item xs={2}>
                  <img
                    style={{ width: '95px', height: '80px' }}
                    className="bg-white shadow-lg rounded"
                    src="https://apimg.net/sponsors/index/af3d653df304f38cdc0985da44aa50c9.jpg"
                    alt="1"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography
                        component="p"
                        className="text-gray"
                        sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
                      >
                        Affmine is an affiliate network mostly based on incentive space and
                        offerwall solutions. We have large experience in affiliate mar...
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}
                      >
                        52 Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
                      </Typography>
                    </Grid>
                    <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                      <Button variant="outlined">Join</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          ))}
          <div className="d-flex justify-content-center pt-3">
            <Button
              sx={{
                color: '#2779bd',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="ml-3 rounded px-1"
            >
              See more offers on affplus
            </Button>
          </div>
        </Stack>
      </Stack>

      <Stack paddingX={3}>
        <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
          <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
            <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
              Affiliate Programs
            </Typography>
          </Stack>
        </Grid>
        <Stack>
          {data.map((item, index) => (
            <Stack key={index} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
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
                    Mostbet Partners
                  </Typography>
                </Grid>
                <Grid item xs={2} className="d-flex justify-content-end">
                  <Stars rating={2.5} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <img
                    style={{ width: '95px', height: '80px' }}
                    className="bg-white shadow-lg rounded"
                    src="https://apimg.net/sponsors/index/af3d653df304f38cdc0985da44aa50c9.jpg"
                    alt="1"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography
                        component="p"
                        className="text-gray"
                        sx={{ fontSize: '0.75rem', color: '#b8c2cc', fontWeight: 'bold' }}
                      >
                        Affmine is an affiliate network mostly based on incentive space and
                        offerwall solutions. We have large experience in affiliate mar...
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}
                      >
                        52 Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
                      </Typography>
                    </Grid>
                    <Grid item xs={2} className="d-flex align-items-center justify-content-end">
                      <Button variant="outlined">Join</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          ))}
          <div className="d-flex justify-content-center pt-3">
            <Button
              sx={{
                color: '#2779bd',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="ml-3 rounded px-1"
            >
              See more offers on affplus
            </Button>
          </div>
        </Stack>
      </Stack>
    </React.Fragment>
  )
}

export { AffiliateNetwork }
