import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { baseColor } from '~/styles'
import { ResponsiveContainer } from '..'
import { Navbar } from './Navbar'

function Header() {
  return (
    <ResponsiveContainer sx={{ position: 'relative', marginBottom:'16px' }}>
      <Navbar />
    </ResponsiveContainer>
  )
}

export { Header }
