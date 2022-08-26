import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export const getAllWebsites = async () => {
    const response = await axios.get(`${BASE_URL}/websites`)

    
}

export const getApiResource = async (name) => {
  const res = await axios.get(`${BASE_URL}/${name}`)
  return res.data
}
