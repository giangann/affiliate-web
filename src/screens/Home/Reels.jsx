import { Grid, Typography, Stack, Box, Avatar, Link } from '@mui/material'
import { Filter, AffiliateNetworkItem } from '~/screens/Home'
import { useEffect, useState } from 'react'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'

import { baseColor, red, blue } from '~/styles/colors'
import lemonad_easy_peasy from '~/assets/gifs/sidebar/lemonad_easy_peasy.gif'
import { Button } from '~/components/Buttons'
import { getAllWebsites } from '~/apis'
import { BoxContainer, FeaturedNetworkItem } from '~/components/Layouts/Sidebar'
import { TextContent, TextHeading } from '~/styles'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import { Stars } from '~/components'
import { List } from '~/components/List'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { useQuery } from 'react-query'

function Reels() {
  const topWebsite = [
    {
      name: 'MyBid',
      avatar: 'https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'EvaDav',
      avatar: 'https://apimg.net/sponsors/circle/ed3d74a40fa6819feeb63777b5e7886a.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'LosPollos',
      avatar: 'https://apimg.net/sponsors/circle/8bd51c64d0efddbff360c1e899c2b3a8.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'Adverten',
      avatar: 'https://apimg.net/sponsors/circle/277bd70928b8ba5f7a44c0ac6d70e8dd.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'Neogara',
      avatar: 'https://apimg.net/sponsors/circle/9c16011d506ba267fea74ae8b3bcfa53.jpg',
      num_of_review: 14,
      rate: 5
    }
  ]

  const { isLoading, error, data: allWebsites } = useQuery('allWebsites', () => getAllWebsites())

  useEffect(() => {
    console.log('callback useEffect', allWebsites, isLoading, error)
  }, [allWebsites, isLoading, error])

  const [open, setOpen] = useState(true)

  const [focusWebsite, setFocusWebsite] = useState(1)
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BoxWithHeader
          mainColor={baseColor.blue}
          data={allWebsites}
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
          restOfHeader={() => (
            <>
              <Filter />
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <BoxContainer sx={{ border: `3px solid ${baseColor.orange}` }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: baseColor.orange, p: '0.75rem' }}
          >
            <TextHeading sx={{ color: 'white' }} varient="h3">
              Network of The Month
            </TextHeading>
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

        {/* <BoxContainer>
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
        </BoxContainer> */}
        <BoxContainer sx={{ border: `3px solid ${baseColor.orange}` }}>
          <Box component="img" src={lemonad_easy_peasy} alt="gif" sx={{ width: '100%' }} />
        </BoxContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <BoxContainer>
          <List
            mainColor={baseColor.orange}
            heading="Featured Networks"
            Item={FeaturedNetworkItem}
          />
        </BoxContainer>
        {/* <img
          style={{ width: '100%', height: 'auto' }}
          src="https://apimg.net/slider/howto-setup-tracker-mylead-546x234.jpg"
          alt="website"
        /> */}
      </Grid>
    </Grid>
  )
}

export default Reels
