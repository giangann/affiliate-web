import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Content from './Content'

function Main() {
  return (
    <React.Fragment>
      <Box
        sx={{
          zIndex: 0
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Content />
      </Container>
    </React.Fragment>
  )
}

export default Main
