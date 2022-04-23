import axios from 'axios'
import { nodeBaseURL, pythonBaseURL } from 'config/baseURL'

export const register = async user => await axios.post(`${nodeBaseURL}/user`, user)

export const login = async user =>
  await axios.get(`${nodeBaseURL}/user/${user.email}/${user.password}`)

export const createProfile = async profile =>
  await axios.post(`${nodeBaseURL}/user/createprofile`, profile)

export const detectPersonality = async (...choices) =>
  await axios.post(`${pythonBaseURL}/trainmodel`, choices)

export const addPersonality = async type =>
  await axios.put(`${nodeBaseURL}/user/updatepersonality`, type)

export const verifyProfileImages = async data =>
  await axios.post(`${pythonBaseURL}/verifyimages`, data)

export const LoginWithToken = async token =>
  await axios.post(`${nodeBaseURL}/user/loginwithtoken`, token)
