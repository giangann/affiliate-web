import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Detail } from '~/screens/Detail'
import { NotFound } from '~/screens/NotFound'
import { Home } from '~/screens/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
