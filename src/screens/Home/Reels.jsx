import { Avatar, Box, Grid, Link, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import { AffiliateNetworkItem } from '~/screens/Home'
import { useQuery } from 'react-query'
import { getAllWebsites, getFeaturesNetwork } from '~/apis'
import lemonad_easy_peasy from '~/assets/gifs/sidebar/lemonad_easy_peasy.gif'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import { Stars } from '~/components'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { Button } from '~/components/Buttons'
import { BoxContainer, FeaturedNetworkItem } from '~/components/Layouts/Sidebar'
import { FeaturedNetwork } from '~/components/Layouts/Sidebar/FeaturedNetwork'
import { ListSkeleton } from '~/components/Skeleton'
import { useWebsites } from '~/libs/hooks/useWebsites'
import { TextContent, TextHeading } from '~/styles'
import { baseColor } from '~/styles/colors'
import { useEffect } from 'react'
import { getAllFilter } from '~/apis'

function Reels() {
  const [filterValue, setFilterValue] = useState({type: 2})
  const [allFilter, setAllFilter] = useState([])
  const {
    isLoading,
    error,
    data: websites
  } = useQuery(['allWebsites', filterValue], getAllWebsites)

  useEffect(() => {
    getAllFilter().then((res) => {
      setAllFilter(res)
    })
    console.log('use effect call')
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <BoxWithHeader
            mainColor={baseColor.blue}
            data={websites}
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
        )}
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
          <FeaturedNetwork
            mainColor={baseColor.orange}
            heading="Featured Networks"
            Item={FeaturedNetworkItem}
            callback={getFeaturesNetwork}
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
