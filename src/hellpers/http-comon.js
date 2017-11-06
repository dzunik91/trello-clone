import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:9876/api/`
})
