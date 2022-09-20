import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import { getFeaturesNetwork, getNetworkOfTheMonth } from '~/apis'
import lemonad_easy_peasy from '~/assets/gifs/sidebar/lemonad_easy_peasy.gif'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import { Stars, ListSkeleton } from '~/components'

import { BoxContainer, FeaturedNetworkItem } from '~/components/Layouts/Sidebar'
import { FeaturedNetwork } from '~/components/Layouts/Sidebar/FeaturedNetwork'

import { TextContent, TextHeading } from '~/styles'
import { baseColor } from '~/styles/colors'
import { useQuery } from 'react-query'
export const Reels = () => {
  const { isLoading, data, isError } = useQuery('getNetworkOfTheMonth', getNetworkOfTheMonth)
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        {isLoading ? (
          <ListSkeleton />
        ) : isError ? null : (
          <BoxContainer sx={{ border: `3px solid ${baseColor.lightOrangeBtn}` }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ backgroundColor: baseColor.lightOrangeBtn, p: '0.75rem' }}
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
              <Link href={data?.link_offer} target="_blank">
                <Box
                  component="img"
                  src={data?.link_banner}
                  alt="algo image"
                  sx={{ width: '100%', display: 'block' }}
                />
              </Link>
              <Stack sx={{ pt: 1.5, pb: 0.25 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Stars rating={data?.aveScore ?? 5} />
                  <LinkRouter to={`/websites/show/${data?.id}`} style={{ textDecoration: 'none' }}>
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
                  </LinkRouter>
                </Box>
                <TextContent sx={{ WebkitLineClamp: '3', ...webkitBox }}>
                  {data?.description ? (
                    <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                  ) : (
                    'greate'
                  )}
                </TextContent>
              </Stack>
            </Stack>
          </BoxContainer>
        )}

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

const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  overflow: 'hidden'
}
