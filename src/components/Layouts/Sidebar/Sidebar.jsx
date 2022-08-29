import React from 'react'
import { Stack, Box, Typography, Link, styled, Grid, Paper } from '@mui/material'

import {
  FeaturedNetworkItem,
  RecentReviewItem,
  Top10RatedNetworkItem
} from '~/components/Layouts/Sidebar'
import { Stars } from '~/components/Star'
import { Button as MyButton } from '~/components/Buttons'
import { List } from '~/components/List'

import { listGifs } from '~/assets/fake-data/list-gifs'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'

import Olmera from '~/assets/gifs/sidebar/Olmera.gif'
import Giantmobi from '~/assets/gifs/sidebar/Giantmobi.gif'
import CDD from '~/assets/gifs/sidebar/CDD.gif'
import InfinityTelecom from '~/assets/gifs/sidebar/InfinityTelecom.gif'
import DynulnMedia from '~/assets/gifs/sidebar/DynuInMedia.gif'
import c3pa from '~/assets/gifs/sidebar/c3pa-300.gif'
import lemonad_easy_peasy from '~/assets/gifs/sidebar/lemonad_easy_peasy.gif'
import { baseColor, blue, grey, red } from '~/styles/colors'

const Sidebar = () => {
  return (
    <Stack>
      <BoxContainer sx={{ border: `3px solid ${baseColor.blue}` }}>
        <Box sx={{ backgroundColor: baseColor.blue, p: '0.75rem' }}>
          <TextHeading sx={{ color: 'white' }} varient="h3">
            Subscribe to Our Newsletter
          </TextHeading>
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
            {listGifs.map((item, index) =>
              index > 5 ? null : (
                <Grid key={index} item xs={5.85}>
                  <Box component="img" src={item} alt="gif" sx={{ width: '100%' }} />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </BoxContainer>
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

      <BoxContainer>
        <List mainColor={baseColor.blue} heading="Featured Networks" Item={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={Olmera} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={Giantmobi} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <List mainColor={baseColor.yellow} heading="Featured Networks" Item={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={CDD} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={InfinityTelecom} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <List mainColor={baseColor.orange} heading="Featured Networks" Item={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={DynulnMedia} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={c3pa} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <List
          heading="Recent Reviews"
          mainColor={baseColor.yellow}
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

      <BoxContainer>
        <Box component="img" src={lemonad_easy_peasy} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <List
          mainColor={baseColor.blue}
          heading="Top 10 Rated Networks"
          Item={Top10RatedNetworkItem}
        />
      </BoxContainer>
    </Stack>
  )
}

export const TextHeading = styled(Typography)({
  fontSize: '0.825rem',
  color: grey['darkest'],
  fontWeight: 'bold'
})

export const TextContent = styled(Typography)({
  fontSize: '0.75rem',
  color: '#b8c2cc',
  fontWeight: 'bold'
})

export const BoxContainer = styled(Paper)({
  backgroundColor: '#ffffff',
  marginBottom: '1rem',
  borderRadius: '0'
})

export { Sidebar }
