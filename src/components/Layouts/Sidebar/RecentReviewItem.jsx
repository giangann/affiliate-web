import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { Stars } from '~/components/Star'
import AvatarImg from '~/assets/images/avatar3.webp'
import { TextHeading, TextContent } from './Sidebar'

export const RecentReviewItem = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
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
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          marginRight: '0.5rem'
        }}
      />
      <Stack sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <TextHeading>Edo</TextHeading>
          <span style={{ fontSize: '12px', color: '#8795a1', marginLeft: '4px' }}>@</span>
          <span style={{ color: '#2779bd', fontSize: '12px', fontWeight: '700' }}>
            360 Affiliates
          </span>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Stars rating={5} />
          <TextContent sx={{ position: 'relative', top: '2px' }}>2 days ago</TextContent>
        </Box>
        <TextContent>Great network.. nice offers with high payout.. And they pay...</TextContent>
      </Stack>
    </Box>
  )
}
