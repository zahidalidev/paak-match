import axios from 'axios'
import { nodeBaseURL } from 'config/baseURL'

export const paySubscription = async (result, email) => {
  return await axios.post(`${nodeBaseURL}/api/plan/sub`, {
    payment_method: result.paymentMethod.id,
    email: email
  })
}
