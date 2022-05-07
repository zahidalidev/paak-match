import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'

import CardInput from 'components/client/CardInput'
import { paySubscription } from 'services/plan'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '35vh auto',
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

  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

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
          const { client_secret, status, latest_invoice } = res.data
          console.log('client_secret: ', latest_invoice)

          if (status === 'requires_action') {
            stripe.confirmCardPayment(client_secret).then(function (result) {
              if (result.error) {
                console.log('Something went wrong!: ', result.error)
                toast.error('Something went wrong!')
                setLoading(false)
                return false
                // The card was declined (i.e. insufficient funds, card has expired, etc)
              } else {
                console.log('You got the money!')
                console.log('latest_invoice: ', latest_invoice)
                setLoading(false)
                return true
              }
            })
          } else {
            console.log('You got the money!')
            setLoading(false)
            return true
          }
        } else {
          setLoading(false)
          return false
        }
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('latest error: ', error)
      toast.error('Something went wrong!')
    }
    setLoading(false)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CardInput />
        <div className={classes.div}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={handleSubmitSub}
          >
            Pay Now
          </Button>
        </div>
        {loading ? (
          <div className='d-flex align-items-center justify-content-center'>
            <CircularProgress disableShrink />
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

export default PayNow
