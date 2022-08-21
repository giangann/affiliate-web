import React from 'react'
import { Stack, Box, Typography, Link, styled, Grid } from '@mui/material'

import {
  FeaturedNetworkItem,
  RecentReviewItem,
  SidebarList,
  Top10RatedNetworkItem
} from '~/components/Layouts/Sidebar'
import { Stars } from '~/components/Star'
import { Button as MyButton } from '~/components/Buttons'

import { listGifs } from '~/assets/fake-data/list-gifs'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'

import Olmera from '~/assets/gifs/sidebar/Olmera.gif'
import Giantmobi from '~/assets/gifs/sidebar/Giantmobi.gif'
import CDD from '~/assets/gifs/sidebar/CDD.gif'
import InfinityTelecom from '~/assets/gifs/sidebar/InfinityTelecom.gif'
import DynulnMedia from '~/assets/gifs/sidebar/DynuInMedia.gif'
import c3pa from '~/assets/gifs/sidebar/c3pa-300.gif'
import lemonad_easy_peasy from '~/assets/gifs/sidebar/lemonad_easy_peasy.gif'
import { blue, grey, red } from '~/styles/colors'

const Sidebar = () => {
  return (
    <Stack>
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
            <input placeholder="enter your email address" />
            <MyButton>Subcribe</MyButton>
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
              <Grid key={index} item xs={5.85}>
                <Box component="img" src={item} alt="gif" sx={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </BoxContainer>

      <BoxContainer>
        <SidebarList heading="Featured Networks" SidebarItem={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={Olmera} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={Giantmobi} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <SidebarList heading="Featured Networks" SidebarItem={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={CDD} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={InfinityTelecom} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <SidebarList heading="Featured Networks" SidebarItem={FeaturedNetworkItem} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={DynulnMedia} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <Box component="img" src={c3pa} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

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

      <BoxContainer>
        <Box component="img" src={lemonad_easy_peasy} alt="gif" sx={{ width: '100%' }} />
      </BoxContainer>

      <BoxContainer>
        <SidebarList heading="Top 10 Rated Networks" SidebarItem={Top10RatedNetworkItem} />
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

export const BoxContainer = styled(Box)({
  border: '2px solid #fff',
  backgroundColor: '#ffffff',
  marginBottom: '1rem'
})

export { Sidebar }
