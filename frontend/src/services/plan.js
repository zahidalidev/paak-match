import axios from 'axios'
import { nodeBaseURL } from 'config/baseURL'

export const paySubscription = async (result, email) =>
  await axios.post(`${nodeBaseURL}/api/plan/sub`, {
    payment_method: result.paymentMethod.id,
    email: email
  })

export const addUserSubscription = async (subscriptionId, userId) =>
  await axios.post(`${nodeBaseURL}/api/plan/subscribed`, {
    subscriptionId,
    userId
  })
