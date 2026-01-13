// Required imports
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_SERVICE_URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default class CoreRemote {

  async CoreRemoteGetApi(endpoint) {
    try {
      const result = await api.get(endpoint)
      return result?.data
    } catch (err) {
      console.error(`HTTP REQUEST FAILED - GET API - ERROR : ${JSON.stringify(err)}`)
      throw err
    }
  }

}
