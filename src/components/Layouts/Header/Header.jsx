import React, { useState } from 'react'
import { ResponsiveContainer } from '..'
import CarouselItem from './CarouselItem'
import { Navbar } from './Navbar'
// import carousel_01 from '~/assets/images/affiliate/carousel_01.jpg'
import carousel_02 from '~/assets/images/affiliate/carousel_02.png'
import carousel_03 from '~/assets/images/affiliate/carousel_03.jpg'
import carousel_04 from '~/assets/images/affiliate/carousel_04.jpg'
import carousel_05 from '~/assets/images/affiliate/carousel_05.jpg'
import carousel_06 from '~/assets/images/affiliate/carousel_06.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '~/components/Comment/style.css'
import { SubNavbar } from './SubNavbar'
import { Hidden } from '@mui/material'
import { useEffect } from 'react'
import { getBanners } from '~/apis'

function Header() {
  const [listImages, setListImages] = useState([])

  const items = listImages.map((item, index) => (
    <CarouselItem image={item} key={index} index={index} />
  ))

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 2 }
  }

  useEffect(() => {
    getBanners().then((res) => {
      setListImages(res)
    })
  }, [])
  return (
    <>
      <ResponsiveContainer sx={{ position: 'relative' }}>
        <Navbar />
        <AliceCarousel
          infinite
          mouseTracking
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          autoPlay
          responsive={responsive}
          controlsStrategy="alternate"
          items={items}
        />
        <Hidden lgUp>
          <SubNavbar />
        </Hidden>
      </ResponsiveContainer>
    </>
  )
}

export { Header }
