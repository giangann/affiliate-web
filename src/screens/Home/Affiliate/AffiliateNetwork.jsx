import React from 'react'
import { useQuery } from 'react-query'

import { Avatar, Box, Grid, Hidden, Link, Stack, Typography } from '@mui/material'
import { Button, Button as MyButton } from '~/components/Buttons'
import {
  BoxContainer,
  FeaturedNetworkItem,
  RecentReviewItem,
  TextContent,
  TextHeading
} from '~/components/Layouts/Sidebar'
import { getRecentReviews, getFeaturesNetwork } from '~/apis'
import { List } from '~/components/List'
import { Stars } from '~/components/Star'
import { PremiumNetwork, AdvertisingNetwork, AffiliateProgram } from '~/screens/Home'
import { ListSkeleton } from '~/components/Skeleton'

import { blue } from '~/styles'

import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'

import { BANNER } from '~/constants/name'

const AffiliateNetwork = (props) => {
  const {
    isLoading: isLoadingRecentReviews,
    error: errorRecentReviews,
    data: recentReviews
  } = useQuery('recent-reviews', getRecentReviews)

  const listBannerSmall = props?.listBanner.filter((item) => item.type === BANNER['SIDEBAR'])
  const listBannerBig = props?.listBanner.filter((item) => item.type === BANNER['MAIN'])
  const defaultBannerBig = listBannerBig[0]

  return (
    <React.Fragment>
      <>
        <PremiumNetwork />

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
                  Algo Affiliates is the top cpa network for crypto offers. For those who have
                  crypto traffic, you have to join....
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
                src={listBannerBig[0]?.link_of_image}
                sx={{ display: 'block', width: '100%', mb: 2 }}
              />

              <Grid container gap={1} justifyContent="space-between">
                {listBannerSmall.map((item, index) =>
                  index > 5 ? null : (
                    <Grid key={index} item xs={5.85}>
                      <Box
                        component="img"
                        src={item.link_of_image}
                        alt="gif"
                        sx={{ width: '100%' }}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </BoxContainer>
        </Hidden>

        <Hidden mdUp>
          <BoxContainer>
            <FeaturedNetworkItem
              heading="Featured Networks"
              callback={getFeaturesNetwork}
              Item={FeaturedNetworkItem}
            />
          </BoxContainer>
        </Hidden>

        <AdvertisingNetwork />

        <Hidden mdUp>
          <BoxContainer>
            {isLoadingRecentReviews ? (
              <ListSkeleton />
            ) : (
              <List
                data={recentReviews}
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
            )}
          </BoxContainer>
        </Hidden>

        <AffiliateProgram />
      </>
    </React.Fragment>
  )
}

export { AffiliateNetwork }
