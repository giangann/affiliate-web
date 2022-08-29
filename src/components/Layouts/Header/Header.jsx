import { Box, Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { baseColor } from '~/styles'
import { ResponsiveContainer } from '..'
import CarouselItem from './CarouselItem'
import { Navbar } from './Navbar'
import carousel_01 from '~/assets/images/affiliate/carousel_01.jpg'
import carousel_02 from '~/assets/images/affiliate/carousel_02.png'
import carousel_03 from '~/assets/images/affiliate/carousel_03.jpg'
import carousel_04 from '~/assets/images/affiliate/carousel_04.jpg'
import carousel_05 from '~/assets/images/affiliate/carousel_05.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function Header() {
  const items = [
    <CarouselItem image={carousel_02} />,
    <CarouselItem image={carousel_03} />,
    <CarouselItem image={carousel_04} />,
    <CarouselItem image={carousel_02} />,
    <CarouselItem image={carousel_03} />,
    <CarouselItem image={carousel_04} />,
    <CarouselItem image={carousel_05} />
  ]
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 3 }
  }

  // const items = [
  //   <div className="item" data-value="1">
  //     1
  //   </div>,
  //   <div className="item" data-value="2">
  //     2
  //   </div>,
  //   <div className="item" data-value="3">
  //     3
  //   </div>,
  //   <div className="item" data-value="4">
  //     4
  //   </div>,
  //   <div className="item" data-value="5">
  //     5
  //   </div>
  // ]

  return (
    <>
      <ResponsiveContainer sx={{ position: 'relative' }}>
        <Navbar />
      </ResponsiveContainer>

      <AliceCarousel
        mouseTracking
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        // disableButtonsControls
        autoPlay
        // autoWidth
        responsive={responsive}
        items={items}
      />
    </>
  )
}

export { Header }
