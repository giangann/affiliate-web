import { Button as MyButton } from '~/components/Buttons'
import { Avatar, Box, Grid, Hidden, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import { Button } from '~/components/Buttons'
import { Filter } from './Filter'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { Stars } from '~/components/Star'
import {
  BoxContainer,
  FeaturedNetworkItem,
  RecentReviewItem,
  SidebarList,
  TextContent,
  TextHeading
} from '~/components/Layouts/Sidebar'
import { listGifs } from '~/assets/fake-data/list-gifs'
import { blue } from '~/styles'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import { maxWidth } from '@mui/system'

const data = [1, 2, 3, 4, 5]

const AffiliateNetwork = () => {
  return (
    <React.Fragment>
      <Stack paddingX={3} sx={{ backgroundColor: 'white' }}>
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
            <Grid
              container
              columnSpacing={2}
              key={index}
              sx={{ borderBottom: '1px solid #ccc' }}
              paddingY={3}
            >
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
                  <Button
                    sx={{ maxWidth: '100% !important' }}
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
                      <Hidden mdDown>
                        incentive space and offerwall solutions. We have large experience in
                        affiliate mar
                      </Hidden>
                      ...
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
                      52 Reviews / 821 Offers / In-house / Bi-Weekly, Weekly
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

      <Stack paddingX={3} sx={{ backgroundColor: 'white' }}>
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

      <Hidden mdUp>
        <BoxContainer>
          <SidebarList heading="Featured Networks" SidebarItem={FeaturedNetworkItem} />
        </BoxContainer>
      </Hidden>

      <Stack paddingX={3} sx={{ backgroundColor: 'white' }}>
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
                    <Button sx={{ maxWidth: '100% !important' }} variant="outlined">
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
                        Affmine is an affiliate network mostly based on incentive space and
                        offerwall solutions.{' '}
                        <Hidden mdDown> We have large experience in affiliate mar</Hidden>
                        ...
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}
                      >
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

      <Hidden mdUp>
        <BoxContainer>
          <SidebarList
            heading="Recent Reviews"
            SidebarItem={RecentReviewItem}
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

      <Stack paddingX={3} sx={{ backgroundColor: 'white' }}>
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
                    <Button variant="outlined" sx={{ width: '100%' }}>
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
                        Affmine is an affiliate network mostly based on incentive space and
                        offerwall solutions.{' '}
                        <Hidden mdDown>We have large experience in affiliate mar</Hidden> ...
                      </Typography>
                      <Typography
                        sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}
                      >
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
