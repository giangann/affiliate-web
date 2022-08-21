import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Content from './Content'

function Main() {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: 'url(https://apimg.net/2022/algo-newbg.jpg) center 0 no-repeat',
          height: '100vh',
          position: 'absolute',
          width: '100vw',
          zIndex: 0
          // backgroundAttachment:'fixed'
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Content />
      </Container>
    </React.Fragment>
  )
}

export default Main
