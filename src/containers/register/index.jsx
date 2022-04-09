import { useState } from 'react'
import Button from 'components/button'

import sideImg from 'assets/Group 37302.png'

import 'containers/register/styles.css'
import Input from 'components/common/Input'

const { innerHeight } = window
const Register = () => {
  const [feilds] = useState([
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

  return (
    <div className='d-flex flex-row container-fluid LoginWrapper justify-content-center align-items-center'>
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
          {feilds.map(item => (
            <div key={item.name} className='d-flex flex-column feilds-wrapper'>
              <Input width='25rem' title={item.name} type={item.type} />
            </div>
          ))}
          <div className='d-flex auth-btn'>
            <Button title='Register' width='25rem' />
          </div>
          <div className='d-flex col-md-6 mt-4 flex-row align-items-start justify-content-start'>
            <p className='another-auth-c'>
              Already have an Account? <span className='auth-span'>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
