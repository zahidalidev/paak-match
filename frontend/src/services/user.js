import axios from 'axios'
import baseURL from 'config/baseURL'

export const register = async user => {
  return await axios.post(`${baseURL}/user`, user)
}
