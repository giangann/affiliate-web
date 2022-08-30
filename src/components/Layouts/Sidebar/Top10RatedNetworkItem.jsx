import React from 'react'
import { Box, Avatar, Typography, Stack } from '@mui/material'
import { ReactComponent as DocIcon } from '~/assets/svgs/sidebar/doc.svg'
import JoinNowIcon from '~/assets/svgs/sidebar/join.svg'
import AvatarImg from '~/assets/images/sidebar/pulsar-ads-circle.png'
import { TextHeading, TextContent } from './Sidebar'
import { red } from '~/styles/colors'

export const Top10RatedNetworkItem = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '1rem',
        py: '12px',
        '&:hover': {
          backgroundColor: '#f8fafc',
          cursor: 'pointer',
          '& .name': {
            color: red['orange'],
            cursor: 'pointer'
          }
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Number number={1} />
        <Typography
          variant="body2"
          className="name"
          sx={{
            marginRight: '0.5rem',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          {item?.name}
        </Typography>
        <TextContent>({item?.reviews && item?.reviews.length})</TextContent>
      </Box>
      <Typography
        sx={{
          color: red['orange'],
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        {item?.aveScore?.toFixed(2)}
      </Typography>
    </Box>
  )
}

export const Number = ({ number }) => {
  const bgColor = number > 3 ? '#b8c2cc' : '#3490dc'

  return (
    <span
      style={{
        backgroundColor: bgColor,
        color: '#fff',
        width: '16px',
        height: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        marginRight: '16px',
        borderRadius: '0.1rem'
      }}
    >
      {number}
    </span>
  )
}
