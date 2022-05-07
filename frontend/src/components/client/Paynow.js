import { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'

import CardInput from 'components/client/CardInput'
import { addUserSubscription, paySubscription } from 'services/plan'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'components/loader'
import { useNavigate } from 'react-router-dom'
import Button from 'components/button'
import { getProfileDetails } from 'services/profile'
import { ADD_CURRENT_PROFILE } from 'store/profiles'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 500,
    marginTop: '0vh'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    paddingTop: '4rem'
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between'
  },
  button: {
    margin: '2em auto 1em'
  }
})

const PayNow = () => {
  const classes = useStyles()
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmitSub = async () => {
    const email = user.email
    try {
      if (!stripe || !elements) {
        return false
      }

      setLoading(true)

      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          email: email
        }
      })

      if (result.error) {
        console.log(result.error.message)
      } else {
        const res = await paySubscription(result, email)
        // eslint-disable-next-line camelcase
        if (!res.data.fail) {
          const { client_secret, status } = res.data
          console.log('client_secret: ')

          if (status === 'succeeded') {
            stripe.confirmCardPayment(client_secret).then(async result => {
              if (result.error) {
                console.log('Something went wrong!: ', result.error)
                toast.error('Something went wrong!')
              } else {
                await addUserSubscription(res.data.user_sub_id, user.id)

                const { data: details } = await getProfileDetails(user.id)
                dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))

                navigate('/matches')
                toast.success('Subscribed Successfully')
                console.log('You got the money!')
              }
            })
          }
        }
      }
    } catch (error) {
      console.log('latest error: ', error)
      toast.error('Something went wrong!')
    }
    setLoading(false)
  }

  return (
    <Card className={classes.root}>
      <Loader show={loading} />
      <CardContent className={classes.content}>
        <CardInput />
        <div className={classes.div}>
          <div className={classes.button}>
            <Button height='3.5rem' title='Subscribe Now' onClick={handleSubmitSub} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PayNow
