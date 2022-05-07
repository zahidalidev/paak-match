import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from 'components/button'
import Input from 'components/common/Input'
import { register } from 'services/user'
import { USER_REGISTER } from 'store/user'
import Loader from 'components/loader'

import 'containers/register/styles.css'
import sideImg from 'assets/Group 37302.png'

const { innerHeight } = window
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [feilds, setFeilds] = useState([
    {
      name: 'Full Name',
      value: '',
      type: 'text'
    },
    {
      name: 'Email',
      value: '',
      type: 'email'
    },
    {
      name: 'Phone Number',
      value: '',
      type: 'number'
    },
    {
      name: 'Password',
      value: '',
      type: 'password'
    },
    {
      name: 'Confirm Password',
      value: '',
      type: 'password'
    }
  ])

  const handleChange = (e, index) => {
    const tempFeilds = [...feilds]
    tempFeilds[index].value = e.target.value
    setFeilds(tempFeilds)
  }

  const handleRegister = async () => {
    setLoading(true)
    try {
      const user = {
        name: feilds[0].value,
        email: feilds[1].value,
        contactNumber: feilds[2].value,
        password: feilds[3].value
      }

      const { data } = await register(user)
      dispatch(USER_REGISTER({ id: data.id, token: data.hash, name: data.name, email: data.email }))
      toast.success('Registeration Successfull')
      navigate('/verify')
    } catch (error) {
      console.log('Register error: ', error.response.data)
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='d-flex flex-row container-fluid LoginWrapper justify-content-center align-items-center'>
      <Loader show={loading} />
      <div className='d-flex col-md-6 justify-content-center align-items-center'>
        <div className='d-flex col-md-10 login-img-wrapper justify-content-start align-items-center'>
          <img
            style={{ objectFit: 'contain', height: innerHeight - 150, marginLeft: -20 }}
            src={sideImg}
          />
        </div>
      </div>
      <div className='d-flex col-md-6 flex-column align-items-center justify-content-end'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='auth-heading'>PaakMatch!</h2>
        </div>
        <div className='d-flex col-md-12 flex-column justify-content-center align-items-center'>
          <h4 className='auth-sub-heading'>Register</h4>
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
            <Button onClick={handleRegister} title='Register' width='25rem' />
          </div>
          <div className='d-flex col-md-6 mt-4 flex-row align-items-start justify-content-start'>
            <p className='another-auth-c'>
              Already have an Account?
              <span onClick={() => navigate('/login')} className='auth-span'>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
