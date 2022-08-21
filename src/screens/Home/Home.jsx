import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'
import { Header } from '~/components/Layouts/Header'
import Main from './Main'

function Home() {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: '#dfedfa url(https://www.affpaying.com/img/s_html.png) repeat-x ',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <Main />
      </Box>
    </React.Fragment>
  )
}

export const AlibabaText = styled(Typography)({
  fontFamily: 'alibaba-sans',
  fontWeight: 600,
  fontSize: '14px'
})

export { Home }
