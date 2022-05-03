import axios from 'axios'
import { nodeBaseURL, pythonBaseURL } from 'config/baseURL'

export const register = async user => await axios.post(`${nodeBaseURL}/api/user`, user)

export const login = async user =>
  await axios.get(`${nodeBaseURL}/api/user/${user.email}/${user.password}`)

export const updateUserProfile = async profile =>
  await axios.put(`${nodeBaseURL}/api/user/createprofile`, profile)

export const detectPersonality = async (...choices) =>
  await axios.post(`${pythonBaseURL}/trainmodel`, choices)

export const addPersonality = async type =>
  await axios.put(`${nodeBaseURL}/api/user/updatepersonality`, type)

export const verifyProfileImages = async data =>
  await axios.post(`${pythonBaseURL}/verifyimages`, data)

export const addPartnerPreferences = async data =>
  await axios.post(`${nodeBaseURL}/api/user/addpartnerpreferences`, data)

export const addProfileImage = async (file, id) =>
  await axios.post(`${nodeBaseURL}/api/user/userprofile/${id}`, file)

export const LoginWithToken = async token =>
  await axios.post(`${nodeBaseURL}/api/user/loginwithtoken`, token)
