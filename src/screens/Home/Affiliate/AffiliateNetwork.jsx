import { Button as MyButton } from '~/components/Buttons'
import { Avatar, Box, Grid, Hidden, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Button } from '~/components/Buttons'
import {
  Filter,
  AffiliateNetworkItem,
  AffiliateOfferItem,
  AdvertisingNetworkItem,
  AffiliateProgramItem
} from '~/screens/Home'
import { Stars } from '~/components/Star'
import {
  BoxContainer,
  FeaturedNetworkItem,
  RecentReviewItem,
  TextContent,
  TextHeading
} from '~/components/Layouts/Sidebar'
import { List } from '~/components/List'

import { blue } from '~/styles'

import { listGifs } from '~/assets/fake-data/list-gifs'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'

const data = [1, 2, 3, 4, 5]

const AffiliateNetwork = () => {
  return (
    <React.Fragment>
      <Stack sx={{ backgroundColor: 'white' }}>
        <List
          sx={{ px: 3, pb: 2 }}
          header={() => (
            <>
              <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
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
              <Filter />
              <img className="block" src={AlgoAffiliatesImg} alt="Algo Affiliates"></img>
            </>
          )}
          Item={AffiliateNetworkItem}
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
        />
      </Stack>

      <Hidden mdUp>
        <BoxContainer sx={{ border: '3px solid #f60' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: blue['lightest'], p: '0.75rem' }}
          >
            <TextHeading varient="h3">Network of The Month</TextHeading>
            <Box
              component="img"
              sx={{
                height: '1.25rem',
                width: '1.25rem'
              }}
              alt="medal icon"
              src={medal_icon}
            />
          </Stack>

          <Stack sx={{ pt: 1.5, px: 1.5, pb: 1 }}>
            <Link href="https://algo-affiliates.com/register/?algo-refer=69" target="_blank">
              <Box
                component="img"
                src={algoImg}
                alt="algo image"
                sx={{ width: '100%', display: 'block' }}
              />
            </Link>
            <Stack sx={{ pt: 1.5, pb: 0.25 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Stars rating={2.5} />
                <Typography sx={{ fontSize: '0.75rem', color: '#3d4852', fontWeight: 'bold' }}>
                  Pat
                </Typography>
              </Box>
              <TextContent>
                Algo Affiliates is the top cpa network for crypto offers. For those who have crypto
                traffic, you have to join....
              </TextContent>
            </Stack>
          </Stack>
        </BoxContainer>

        <BoxContainer>
          <Box sx={{ backgroundColor: blue['lightest'], p: '0.75rem' }}>
            <TextHeading varient="h3">Subscribe to Our Newsletter</TextHeading>
            <Box sx={{ display: 'flex' }}>
              <input
                style={{
                  flex: 1,
                  outline: 'none',
                  border: 'none',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem'
                }}
                placeholder="Enter your email address"
              />
              <MyButton variant="contained" type="button-red">
                Subcribe
              </MyButton>
            </Box>
          </Box>

          <Box sx={{ px: '0.75rem', py: 2 }}>
            <Box
              component="img"
              src={clickdealerImg}
              sx={{ display: 'block', width: '100%', mb: 2 }}
            />

            <Grid container gap={1} justifyContent="space-between">
              {listGifs.map((item, index) => (
                <Grid key={index} item xs={5.6}>
                  <Box component="img" src={item} alt="gif" sx={{ width: '100%' }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </BoxContainer>
      </Hidden>

      <Stack sx={{ backgroundColor: 'white' }}>
        <List
          sx={{ px: 3, pb: 2 }}
          header={() => (
            <>
              <Grid container sx={{ borderBottom: { xs: 'none', md: '1px solid #ccc' } }}>
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
            </>
          )}
          Item={AffiliateOfferItem}
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
        />
      </Stack>

      <Hidden mdUp>
        <BoxContainer>
          <List heading="Featured Networks" Item={FeaturedNetworkItem} />
        </BoxContainer>
      </Hidden>

      <Stack sx={{ backgroundColor: 'white' }}>
        <List
          sx={{ px: 3, pb: 2 }}
          header={() => (
            <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Advertising Networks
                </Typography>
              </Stack>
            </Grid>
          )}
          Item={AdvertisingNetworkItem}
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
        />
      </Stack>

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

      <Stack sx={{ backgroundColor: 'white' }}>
        <List
          sx={{ px: 3, pb: 2 }}
          header={() => (
            <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Affiliate Programs
                </Typography>
              </Stack>
            </Grid>
          )}
          Item={AffiliateProgramItem}
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
        />
      </Stack>
    </React.Fragment>
  )
}

export { AffiliateNetwork }
