import axios from 'axios'
import { baseURL, request } from './request'

// const BASE_URL = 'http://127.0.0.1:8000/api'

export const getAllWebsites = async (query) => {
  const params = new URLSearchParams()
  if (query?.queryKey[1].tracking_software?.id) {
    params.append('tracking_software', query.queryKey[1].tracking_software.name)
  }
  if (query?.queryKey[1].payment_frequency?.id) {
    params.append('payment_frequency', query.queryKey[1].payment_frequency.name)
  }
  if (query?.queryKey[1].payment_method?.id) {
    params.append('payment_method', query.queryKey[1].payment_method.name)
  }
  if (query?.queryKey[1]?.type) {
    params.append('type', query?.queryKey[1]?.type)
  }
  const response = await request.get(`websites`, { params })

  return response.data
}
// paginate
export const getWebsiteByType = async (params) => {
  const response = await request.get(`websites`, { params })

  return response.data
}

export const getFeaturesNetwork = async () => {
  const response = await request.get(`websites-feature-network`)

  return response.data
}

export const getWebsitesByCategoryId = async ({ id, page, per_page }) => {
  const response = {
    data: await request.get(`websites/getByCategoryId`, {
      params: { category_id: id, page, per_page: per_page || 10 }
    })
  }

  return response.data.data
}

export const getWebsite = async (id, userId = null) => {
  let res
  if (userId) {
    res = await request.get(`/websites/show/${id}`, {
      params: { userId: userId }
    })
  } else {
    res = await request.get(`/websites/show/${id}`)
  }
  return res.data
}

export const getDataDetail = async (slug) => {
  const res = await axios.get(`https://api.affplus.com/v1/entity/${slug}`)

  return res.data.data
}

export const getApiResource = async (name) => {
  const res = await request.get(`/${name}`)
  return res.data
}

export const getListComments = async ({ id, user_id, page, per_page }) => {
  const res = await request.get(`reviews`, {
    params: { websiteId: id, user_id: user_id, page, per_page: per_page || 10 }
  })
  return res.data
}

export const getTop10Networks = async () => {
  const res = await request.get(`websites-top-10`)

  return res.data
}

export const getRecentReviews = async () => {
  const res = await request.get(`reviews-recent`)

  return res.data.data
}

export const login = async (url, data) => {
  const res = await request.post(`${url}`, data)
  return res
}

export const loginWithGG = async (url, data) => {
  const res = await request.post(`${url}`, data)
  return res
}

export const getGoogleLoginUrl = async (name) => {
  const res = await request.get(`${name}`)
  return res.data
}

export const addNetWork = async (data) => {
  const res = await request.post(`websites`, data)
  return res
}

export const editNetWork = async (id, data) => {
  const res = await request.patch(`websites/${id}`, data)
  return res
}

export const deleteNetWork = async (id) => {
  const res = await request.delete(`websites/${id}`)

  return res
}

export const getCategories = async () => {
  const res = await request.get('categories')
  return res
}

export const searchNetworks = async (keyword) => {
  const res = await request.get(`websites`, {
    params: { keyword }
  })

  return res.data
}

export const getMe = async () => {
  const res = await request.get('users/me')
  return res
}

export const addReply = async (data) => {
  const res = await request.post(`interaction/replyContent`, data)
  return res
}

export const addReaction = async (data) => {
  const res = await request.post(`like/like`, data)
  return res
}

export const getRepliesByReviewId = async (id) => {
  const res = await axios.get(`${baseURL}interaction/getInteractionByIdReview`, {
    params: { reviewId: id }
  })
  return res.data
}

export const updateReview = async (id) => {
  const res = await axios.patch(`${baseURL}reviews/${id}`)
  return res.data
}

export const getReviewById = async (id) => {
  const res = await request.get(`reviews/${id}`)
  return res.data
}

export const deleteReply = async (id) => {
  const res = await request.delete(`interaction/${id}`)
  return res
}

export const getTrackingSoftware = async () => {
  const res = await request.get('tracking_software')
  return res.data
}

export const getPaymentMethod = async () => {
  const res = await request.get('payment_method')
  return res.data
}

export const getPaymentFrequencies = async () => {
  const res = await request.get('payment_frequencies')
  return res.data
}

export const getAllFilter = async () => {
  const res = await request.get('all_filter')
  return res.data
}

export const getBanners = async () => {
  const res = await request.get('banners')
  return res.data
}

export const editBanner = async (id, data) => {
  const res = await request.patch(`banners/${id}`, data)
  return res
}
