import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { ReactComponent as DocIcon } from '~/assets/svgs/sidebar/doc.svg'
import JoinNowIcon from '~/assets/svgs/sidebar/join.svg'
import AvatarImg from '~/assets/images/sidebar/pulsar-ads-circle.png'
import { TextHeading } from './Sidebar'
import { Tag } from '~/components/Tag'

export const FeaturedNetworkItem = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: '1rem',
        py: '12px',
        '&:hover': {
          backgroundColor: '#f8fafc',
          cursor: 'pointer'
        }
      }}
    >
      <Avatar
        src={AvatarImg}
        sx={{
          width: '36px',
          height: '36px',
          background: 'red',
          // background: 'linear-gradient(130deg,#ff7a18,#f60 41.07%,#3490dc 76.05%)',
          borderRadius: '50%',
          marginRight: '1.25rem'
        }}
      />
      <Stack sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <TextHeading>Pulsar Ads</TextHeading>
          <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
            <DocIcon />
          </Avatar>
        </Box>
        <Box>
          <Tag label="Crypto" />
          <Tag label="Nutra" />
          <Tag label="Bizopp" />
        </Box>
      </Stack>
      <Box
        component="img"
        src={JoinNowIcon}
        sx={{
          width: '20px',
          height: '20px'
        }}
      />
    </Box>
  )
}
