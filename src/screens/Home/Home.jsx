import React from 'react'
import { Box, Container } from '@mui/material'
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
      <Container>
        <Header />
        <Main />
      </Container>
    </Box>
  )
}

export { Home }
