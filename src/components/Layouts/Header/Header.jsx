import { Box, Container } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Box sx={{ height: '200px', position: 'relative' }}>
      <Box
        sx={{
          background: 'url(https://www.affpaying.com/img/logobg.png) no-repeat',
          width: '711px',
          height: '355px',
          position: 'absolute'
        }}
      >
        <img
          src="https://www.affpaying.com/img/logo.png"
          style={{ width: '235px', height: '90px' }}
          alt="logo"
        />
      </Box>
    </Box>
  )
}

export { Header }
