import React from 'react'
import { Stack, Box, Typography, Link, Input, Button, styled, Grid } from '@mui/material'

import { SidebarList } from './SidebarList'
import { Stars } from '~/components/Star'
import { MyButton } from '~/components/Button'

import { listGifs } from '~/assets/fake-data/list-gifs'
import medal_icon from '~/assets/svgs/sidebar/medal_icon.svg'
import algoImg from '~/assets/images/sidebar/algo-268x118-3.jpg'
import clickdealerImg from '~/assets/images/sidebar/clickdealer.png'

import { blue, grey, red } from '~/styles/colors'

const Sidebar = () => {
  return (
    <Stack>
      <Box sx={{ border: '3px solid #f60', backgroundColor: '#ffffff', mb: 1 }}>
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
      </Box>

      <Box sx={{ backgroundColor: '#ffffff', mb: 1 }}>
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
      </Box>
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

export { Sidebar }
