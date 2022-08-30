import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export const getAllWebsites = async () => {
  const response = await axios.get(`${BASE_URL}/websites`)
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

export const getWebsite = async (id) => {
  const res = await axios.get(`${BASE_URL}/websites/show/${id}`)
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
  const res = await axios.get(`${BASE_URL}/${name}`)
  return res.data
}

export const getListComments = async (id) => {
  const res = await axios.get(`${BASE_URL}/reviews`, { params: { websiteId: id } })
  return res.data
}
