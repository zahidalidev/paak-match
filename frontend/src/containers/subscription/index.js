import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import configObj from 'config/stripeKey.json'
import Paynow from 'components/client/Paynow'

import 'containers/subscription/styles.css'

const stripePromise = loadStripe(configObj.stripPublicId)

const Subscription = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='d-flex sub-back-img col-md-6 justify-content-center align-items-center '>
        <div className='elem-stripe'>
          <Elements stripe={stripePromise}>
            <Paynow />
          </Elements>
        </div>
      </div>
    </div>
  )
}

export default Subscription
