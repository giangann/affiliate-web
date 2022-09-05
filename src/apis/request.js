import Axios from 'axios'

const baseURL = 'https://api.rubyaff.com/public/api/'

// const refetchTokenURL = ${baseURL}/${V1}/user/refresh-token

async function authRequestInterceptor(config) {
  const _token = await localStorage.getItem('user-token')
  // Fix stupid axios typescript
  if (_token && _token !== 'undefined' && config.headers) {
    const token = _token
    config.headers.authorization = `Bearer ${token}`
    // console.log(`Bearer ${token}`)
  }
  return config
}

export const request = Axios.create({
  baseURL
})

request.interceptors.request.use(authRequestInterceptor)
