import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import configObj from 'config/stripeKey.json'
import Paynow from 'components/client/Paynow'

const stripePromise = loadStripe(configObj.stripPublicId)

const Subscription = () => {
  return (
    <Elements stripe={stripePromise}>
      <Paynow />
    </Elements>
  )
}

export default Subscription
