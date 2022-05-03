import axios from 'axios'
import { nodeBaseURL } from 'config/baseURL'

export const matchedUserProfile = async id => await axios.get(`${nodeBaseURL}/api/profile/${id}`)
