import axios from 'axios'
import baseURL from 'config/baseURL'

export const register = async user => {
  return await axios.post(`${baseURL}/user`, user)
}

export const login = async user => {
  return await axios.get(`${baseURL}/user/${user.email}/${user.password}`)
}
