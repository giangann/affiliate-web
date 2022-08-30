import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { Stars } from '~/components/Star'
import AvatarImg from '~/assets/images/avatar3.webp'
import { TextHeading, TextContent } from './Sidebar'
import { formatTimeDiff } from '~/libs/utils'

const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  overflow: 'hidden'
}

export const RecentReviewItem = ({ item }) => {
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
          <TextHeading>{item?.user_name}</TextHeading>
          <span style={{ fontSize: '12px', color: '#8795a1', marginLeft: '4px' }}>@</span>
          <span style={{ color: '#2779bd', fontSize: '12px', fontWeight: '700' }}>
            {item?.website?.name}
          </span>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Stars rating={item?.score} />
          <TextContent>{formatTimeDiff(item?.created_at)}</TextContent>
        </Box>
        <TextContent sx={{ ...webkitBox }}>{item?.content}</TextContent>
      </Stack>
    </Box>
  )
}
