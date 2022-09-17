import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllFilter } from '~/apis'

import { Avatar, Box, Grid, Hidden, Link, Stack, Typography } from '@mui/material'
import { Button, Button as MyButton } from '~/components/Buttons'
import {
  BoxContainer,
  FeaturedNetworkItem,
  RecentReviewItem,
  TextContent,
  TextHeading
} from '~/components/Layouts/Sidebar'
import { getAllWebsites, getTop10Networks, getRecentReviews, getFeaturesNetwork } from '~/apis'
import { List } from '~/components/List'
import { Stars } from '~/components/Star'
import {
  AdvertisingNetworkItem,
  AffiliateNetworkItem,
  AffiliateProgramItem,
  AffiliateOfferItem,
  Filter
} from '~/screens/Home'
import { ListSkeleton } from '~/components/Skeleton'

import { baseColor, blue } from '~/styles'

import { listGifs } from '~/assets/fake-data/list-gifs'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { useState } from 'react'

const AffiliateNetwork = () => {
  const [allFilter, setAllFilter] = useState([])
  const [filterValue, setFilterValue] = useState({ type: 3 })
  const {
    isLoading,
    error,
    data: allWebsites
  } = useQuery(['allWebsites', filterValue], getAllWebsites)
  const {
    isLoading: isLoadingRecentReviews,
    error: errorRecentReviews,
    data: recentReviews
  } = useQuery('recent-reviews', getRecentReviews)

  useEffect(() => {
    getAllFilter().then((res) => {
      setAllFilter(res)
    })
  }, [])
  return (
    <React.Fragment>
      {isLoading ? (
        <ListSkeleton />
      ) : (
        <>
          <BoxWithHeader
            mainColor={baseColor.blue}
            data={allWebsites}
            allFilter={allFilter}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
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
                      Premium Networks
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
                    {/* <Button variant="contained" type="button-blue">
                      Top Rated
                    </Button> */}
                    <Button
                      variant="contained"
                      type="button-gray"
                      onClick={() => {
                        setFilterValue({})
                      }}
                    >
                      Reset filter
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            )}
            restOfHeader={() => (
              <>
                <img
                  className="block"
                  style={{ width: '100%' }}
                  src={AlgoAffiliatesImg}
                  alt="Algo Affiliates"
                ></img>
              </>
            )}
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

          <Hidden mdUp>
            <BoxContainer>
              <FeaturedNetworkItem
                heading="Featured Networks"
                callback={getFeaturesNetwork}
                Item={FeaturedNetworkItem}
              />
            </BoxContainer>
          </Hidden>

          <BoxWithHeader
            mainColor={baseColor.orange}
            data={allWebsites}
            title={() => (
              <Grid container>
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

          <BoxWithHeader
            mainColor={baseColor.yellow}
            data={allWebsites}
            title={() => (
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
        </>
      )}
    </React.Fragment>
  )
}

export { AffiliateNetwork }
