import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Detail } from '~/screens/Detail'
import { NotFound } from '~/screens/NotFound'
import { Home } from '~/screens/Home'
import { Resource } from '~/screens/Resource'
import Dashboard from '~/screens/Dashboard/Dashboard'

export const Router = () => {
  const isAdmin = false
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites/show/:id" element={<Detail />} />
      <Route path="/:slug" element={<Detail />} />
      <Route path="/resources" element={<Resource />} />
      <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
