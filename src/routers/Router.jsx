import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Detail } from '~/screens/Detail'
import { NotFound } from '~/screens/NotFound'
import { Home } from '~/screens/Home'
import { Resource } from '~/screens/Resource'
import { Category } from '~/screens/Category'
import Dashboard from '~/screens/Dashboard/Dashboard'
import AddNetworkForm from '~/screens/Dashboard/AddNetworkForm'
import { getUserLocalStorage } from '~/libs/function/user'
import { ADMIN_EMAIL } from '~/constants/name'
import EditNetWork from '~/screens/Dashboard/EditNetWork'
import { AdvertisingNetworks, AffiliatePrograms, PremiumNetworks } from '~/screens/Network'

export const Router = () => {
  const userInfo = getUserLocalStorage()
  const isAdmin = ADMIN_EMAIL.includes(userInfo?.email)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites/show/:id" element={<Detail />} />
      <Route path="/affiliate-networks/category/:category_id" element={<Category />} />

      <Route path="/affiliate-networks" element={<PremiumNetworks />} />
      <Route path="/advertising-networks" element={<AdvertisingNetworks />} />
      <Route path="/affiliate-programs" element={<AffiliatePrograms />} />

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
