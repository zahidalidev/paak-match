import axios from 'axios'
import { nodeBaseURL, pythonBaseURL } from 'config/baseURL'

export const register = async user => {
  return await axios.post(`${nodeBaseURL}/user`, user)
}

export const login = async user => {
  return await axios.get(`${nodeBaseURL}/user/${user.email}/${user.password}`)
}

export const createProfile = async profile => {
  return await axios.post(`${nodeBaseURL}/user/createprofile`, profile)
}

export const detectPersonality = async (...choices) => {
  return await axios.post(`${pythonBaseURL}/trainmodel`, choices)
}

export const addPersonality = async type => {
  return await axios.put(`${nodeBaseURL}/user/updatepersonality`, type)
}
