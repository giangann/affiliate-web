import axios from 'axios'
import { request } from './request'

// const BASE_URL = 'http://127.0.0.1:8000/api'

export const getAllWebsites = async () => {
  const response = await request.get(`/websites`)
  const responses = await Promise.all(response.data.map((website) => axios.get(website.api)))

  return response.data.reduce((total, item) => {
    const data_web = responses.find(
      (res) => res.data.data.title.toLowerCase() === item.name.toLowerCase()
    )

    return [
      ...total,

      {
        ...item,
        data_api: data_web ? data_web?.data?.data : null
      }
    ]
  }, [])
}

export const getWebsitesByCategoryId = async (id, page, per_page = 10) => {
  const response = await request.get(`websites/getByCategoryId`, {
    params: { category_id: id, page, per_page }
  })
  const responses = await Promise.all(response.data.data.map((website) => axios.get(website.api)))

  return response.data.data.reduce((total, item) => {
    const data_web = responses.find(
      (res) => res.data.data.title.toLowerCase() === item.name.toLowerCase()
    )

    return [
      ...total,

      {
        ...item,
        data_api: data_web ? data_web?.data?.data : null
      }
    ]
  }, [])
}

export const getWebsite = async (id) => {
  const res = await request.get(`/websites/show/${id}`)
  const data = await axios.get(res.data.api)

  return {
    ...res.data,
    data_api: data.data.data
  }
}

export const getDataDetail = async (slug) => {
  const res = await axios.get(`https://api.affplus.com/v1/entity/${slug}`)

  return res.data.data
}

export const getApiResource = async (name) => {
  const res = await request.get(`/${name}`)
  return res.data
}

export const getListComments = async (id, page, per_page = 10) => {
  const res = await request.get(`reviews`, {
    params: { websiteId: id, page, per_page }
  })
  return res.data
}

export const getTop10Networks = async () => {
  const res = await request.get(`websites/top-10`)

  return res.data
}

export const getRecentReviews = async () => {
  const res = await request.get(`reviews/recent`)

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
