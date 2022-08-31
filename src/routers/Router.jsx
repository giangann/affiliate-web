import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Detail } from '~/screens/Detail'
import { NotFound } from '~/screens/NotFound'
import { Home } from '~/screens/Home'
import { Resource } from '~/screens/Resource'
import { Category } from '~/screens/Category'
import Dashboard from '~/screens/Dashboard/Dashboard'
import AddNetworkForm from '~/screens/Dashboard/AddNetworkForm'
import EditNetWork from '~/screens/Dashboard/EditNetWork'

export const Router = () => {
  const isAdmin = true
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites/show/:id" element={<Detail />} />
      <Route path="/affiliate-networks/category/:category_id" element={<Category />} />
      <Route path="/:slug" element={<Detail />} />
      <Route path="/resources" element={<Resource />} />
      <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <NotFound />} />
      <Route path="/dashboard/add-network" element={isAdmin ? <AddNetworkForm /> : <NotFound />} />
      <Route
        path="/dashboard/edit-network/:network_id"
        element={isAdmin ? <EditNetWork /> : <NotFound />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
