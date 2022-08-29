import { Avatar, Box, Grid, Hidden, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Button, Button as MyButton } from '~/components/Buttons'
import {
  BoxContainer,
  FeaturedNetworkItem,
  RecentReviewItem,
  TextContent,
  TextHeading
} from '~/components/Layouts/Sidebar'
import { List } from '~/components/List'
import { Stars } from '~/components/Star'
import {
  AdvertisingNetworkItem,
  AffiliateNetworkItem,
  AffiliateProgramItem,
  AffiliateOfferItem,
  Filter
} from '~/screens/Home'

import { baseColor, blue } from '~/styles'

import { listGifs } from '~/assets/fake-data/list-gifs'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import BoxWithHeader from '~/components/Box/BoxWithHeader'

const AffiliateNetwork = () => {
  return (
    <React.Fragment>
      <BoxWithHeader
        mainColor={baseColor.blue}
        title={() => (
          <Grid container>
            <Grid item xs={6} sx={{ justifyContent: 'center' }}>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
                  <DiamondIcon />
                </Avatar>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Premiun Networks
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                className="h-100"
              >
                <Button variant="contained" type="button-blue">
                  Top Rated
                </Button>
                <Button variant="contained" type="button-gray">
                  Newest
                </Button>
              </Stack>
            </Grid>
          </Grid>
        )}
        // restOfHeader={() => (
        //   <>
        //     <Filter />
        //     <img
        //       className="block"
        //       style={{ width: '100%' }}
        //       src={AlgoAffiliatesImg}
        //       alt="Algo Affiliates"
        //     ></img>
        //   </>
        // )}
        footer={() => (
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
        )}
      >
        <AffiliateNetworkItem mainColor={baseColor.blue} />
      </BoxWithHeader>

      <Hidden mdUp></Hidden>

      <BoxWithHeader
        title={() => (
          <Grid container mb={{ xs: 2, sm: 0 }}>
            <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
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
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                className="h-100"
                spacing={2}
              >
                <Button variant="contained" type="button-blue">
                  Top Converting
                </Button>
                <Button variant="contained" type="button-gray">
                  Lastest
                </Button>
              </Stack>
            </Grid>
          </Grid>
        )}
        footer={() => (
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
        )}
      >
        <AffiliateOfferItem />
      </BoxWithHeader>

      <Hidden mdUp>
        <BoxContainer>
          <List heading="Featured Networks" Item={FeaturedNetworkItem} />
        </BoxContainer>
      </Hidden>

      <BoxWithHeader
        title={() => (
          <Grid container>
            <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
                Advertising Networks
              </Typography>
            </Stack>
          </Grid>
        )}
        footer={() => (
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
        )}
      >
        <AdvertisingNetworkItem />
      </BoxWithHeader>

      <Hidden mdUp>
        <BoxContainer>
          <List
            heading="Recent Reviews"
            Item={RecentReviewItem}
            footer={() => (
              <Box
                sx={{
                  textAlign: 'center',
                  py: '0.5rem',
                  borderTop: '1px solid #dae1e7',
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                    cursor: 'pointer'
                  }
                }}
              >
                <Typography sx={{ fontSize: '.75rem', color: '#2779bd', fontWeight: '700' }}>
                  More Reviews
                </Typography>
              </Box>
            )}
          />
        </BoxContainer>
      </Hidden>

      <BoxWithHeader
        title={() => (
          <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
            <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
                Affiliate Programs
              </Typography>
            </Stack>
          </Grid>
        )}
        footer={() => (
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
        )}
      >
        <AffiliateProgramItem />
      </BoxWithHeader>
    </React.Fragment>
  )
}

export { AffiliateNetwork }
