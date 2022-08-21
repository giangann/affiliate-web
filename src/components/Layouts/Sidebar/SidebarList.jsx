import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

// import { FeaturedNetworksItem } from './FeaturedNetworksItem'

import { red, blue } from '~/styles/colors'
import Flag from '~/assets/svgs/sidebar/flag.svg'

import { TextHeading } from './Sidebar'

export const SidebarList = ({ heading, SidebarItem, ...props }) => {
  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: blue['lightest'],
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          p: '0.75rem'
        }}
      >
        <Box
          component="img"
          src={Flag}
          alt="flag"
          sx={{
            color: red['orange'],
            fill: 'currentColor',
            width: '20px',
            height: '20px',
            position: 'relative',
            top: '2px'
          }}
        />
        <TextHeading>{heading}</TextHeading>
      </Box>

      {[0, 1, 2, 4, 5, 6, 7, 8].map((item) => (
        <SidebarItem key={item} />
      ))}

      {props.footer && props.footer()}
    </Stack>
  )
}
