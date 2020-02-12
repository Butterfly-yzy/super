import axios from 'axios'

export function request(config) {
  const createAxios = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 10000
  })

  createAxios.interceptors.request.use((config) => {
    return config;
  })

  createAxios.interceptors.response.use((res) => {
    return res.data;
  })
  return createAxios(config);
}
