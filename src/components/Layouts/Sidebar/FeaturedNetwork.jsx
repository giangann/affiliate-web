import React from 'react'
import { Stack, Box, Typography, styled } from '@mui/material'

import { baseColor, blue, grey, red } from '~/styles/colors'
import Flag from '~/assets/svgs/sidebar/flag.svg'
import { useQuery } from 'react-query'
import { getFeaturesNetwork } from '~/apis'
import { ListSkeleton } from '~/components/Skeleton'

export const FeaturedNetwork = ({ heading, callback, mainColor, Item, ...props }) => {
  const {
    isLoading,
    error,
    data: FeaturedNetwork
  } = useQuery('featured-network', callback)

  return (
    <Stack
      sx={{
        borderTop: mainColor ? `3px solid ${mainColor}` : `3px solid ${blue['border']}`,
        ...props?.sx
      }}
    >
      {heading && (
        <Box
          sx={{
            backgroundColor: mainColor ?? blue['lightest'],
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
      )}
      {props.header && props.header()}
      {FeaturedNetwork
        ? FeaturedNetwork.map((item) => (
            <Item
              networkName={props?.networkName}
              refetchComment={props?.refetchComment}
              handleRefetchComment={props?.handleRefetchComment}
              handleOpenEditReview={props?.handleOpenEditReview}
              key={item.id}
              mainColor={mainColor}
              item={item}
            />
          ))
        : <ListSkeleton />}

      {props.footer && props.footer()}
    </Stack>
  )
}

export const TextHeading = styled(Typography)({
  fontSize: '0.8125rem',
  color: 'white',
  fontWeight: 'bold'
})

export const TextContent = styled(Typography)({
  fontSize: '0.75rem',
  color: '#b8c2cc',
  fontWeight: 'bold'
})
