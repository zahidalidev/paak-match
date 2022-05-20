import axios from 'axios'
import { nodeBaseURL, pythonBaseURL } from 'config/baseURL'

export const register = async user => await axios.post(`${nodeBaseURL}/api/user`, user)

export const login = async user =>
  await axios.get(`${nodeBaseURL}/api/user/${user.email}/${user.password}`)

export const getAllUser = async id => await axios.get(`${nodeBaseURL}/api/user/allusers/${id}`)

export const getAllUserSubscriptions = async () =>
  await axios.get(`${nodeBaseURL}/api/user/allsubscriptions`)

export const updateUserProfile = async profile =>
  await axios.put(`${nodeBaseURL}/api/user/createprofile`, profile)

export const detectPersonality = async (...choices) =>
  await axios.post(`${pythonBaseURL}/trainmodel`, choices)

export const addPersonality = async type =>
  await axios.put(`${nodeBaseURL}/api/user/updatepersonality`, type)

export const verifyProfileImages = async data =>
  await axios.post(`${pythonBaseURL}/verifyimages`, data)

export const addPartnerPreferences = async (data, data2) => {
  await axios.post(`${nodeBaseURL}/api/user/addpartnerpreferences`, data)
  await axios.post(`${nodeBaseURL}/api/user/addpartnerpreferencesweight`, data2)
}

export const updatePartnerPreferences = async (data, data2) => {
  await axios.put(`${nodeBaseURL}/api/user/updatePartnerPreferences`, data)
  await axios.put(`${nodeBaseURL}/api/user/updatePartnerPreferencesweight`, data2)
}

export const addProfileImage = async (file, id) =>
  await axios.post(`${nodeBaseURL}/api/user/userprofile/${id}`, file)

export const LoginWithToken = async body =>
  await axios.post(`${nodeBaseURL}/api/user/loginwithtoken`, body)
