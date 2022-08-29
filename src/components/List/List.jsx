import React from 'react'
import { Stack, Box, Typography, styled } from '@mui/material'

import { blue, grey, red } from '~/styles/colors'
import Flag from '~/assets/svgs/sidebar/flag.svg'

export const List = ({ data, heading, Item, ...props }) => {
  // console.log('list', data)

  return (
    <Stack sx={{ borderTop: `3px solid ${blue['border']}`, ...props?.sx }}>
      {heading && (
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
      )}
      {props.header && props.header()}
      {data
        ? data.map((item) => <Item key={item.id} item={item} />)
        : [0, 1, 2, 4, 5, 6, 7, 8].map((item) => <Item key={item} />)}

      {props.footer && props.footer()}
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
