import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import sideImg from 'assets/Group 37302.png'

import { USER_LOGIN } from 'store/user'
import Button from 'components/button'
import Input from 'components/common/Input'
import Loader from 'components/loader'
import { login } from 'services/user'

import 'containers/register/styles.css'
import { toast } from 'react-toastify'

const { innerHeight } = window

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [feilds, setFeilds] = useState([
    {
      name: 'Email',
      value: '',
      type: 'email'
    },

    {
      name: 'Password',
      value: '',
      type: 'password'
    }
  ])

  const handleChange = (e, index) => {
    const tempFeilds = [...feilds]
    tempFeilds[index].value = e.target.value
    setFeilds(tempFeilds)
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const user = {
        email: feilds[0].value,
        password: feilds[1].value
      }

      const { data } = await login(user)
      dispatch(USER_LOGIN({ id: data.id, token: data.hash, name: data.name, email: data.email }))
      console.log(data)
    } catch (error) {
      console.log('Register error: ', error)
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='d-flex flex-row container-fluid LoginWrapper justify-content-center align-items-center'>
      <Loader show={loading} />
      <div className='d-flex col-md-6 flex-column align-items-center justify-content-end'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='auth-heading'>PaakMatch!</h2>
        </div>
        <div className='d-flex col-md-12 flex-column justify-content-center align-items-center'>
          <h4 className='auth-sub-heading'>Login</h4>
          {feilds.map((item, index) => (
            <div key={index.toString()} className='d-flex flex-column feilds-wrapper'>
              <Input
                handleChange={e => handleChange(e, index)}
                width='25rem'
                title={item.name}
                type={item.type}
              />
            </div>
          ))}
          <div className='d-flex auth-btn'>
            <Button onClick={handleLogin} title='Login' width='25rem' />
          </div>
          <div className='d-flex col-md-6 mt-4 flex-row align-items-start justify-content-start'>
            <p className='another-auth-c'>
              Don’t have an Account?{' '}
              <span onClick={() => navigate('/createprofile')} className='auth-span'>
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='d-flex col-md-6 justify-content-center align-items-center'>
        <div className='d-flex col-md-10 login-img-wrapper justify-content-start align-items-center'>
          <img
            style={{ objectFit: 'contain', height: innerHeight - 150, marginLeft: -20 }}
            src={sideImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
