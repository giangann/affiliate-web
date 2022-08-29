import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Detail } from '~/screens/Detail'
import { NotFound } from '~/screens/NotFound'
import { Home } from '~/screens/Home'
import { Resource } from '~/screens/Resource'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites/:id" element={<Detail />} />
      <Route path="/:slug" element={<Detail />} />
      <Route path="/resources" element={<Resource />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
