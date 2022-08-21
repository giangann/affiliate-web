import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'
import { Header } from '~/components/Layouts/Header'
import Main from './Main'

function Home() {
  return (
    <Box
      sx={{
        background: '#dfedfa url(https://www.affpaying.com/img/s_html.png) repeat-x',
        height: '100vh'
      }}
    >
      <Header />
      <Main />
    </Box>
  )
}

export const AlibabaText = styled(Typography)({
  fontFamily: 'alibaba-sans',
  fontWeight: 600,
  fontSize: '14px'
})

export { Home }
