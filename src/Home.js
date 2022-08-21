import React from 'react'
import { Box } from '@mui/material'
import Header from './components/Layouts/Header/Header'
import Main from './Main'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  )
}

export default Home
