import { useEffect, useState } from 'react'
import { getProfileDetails } from 'services/profile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { personalityChaDetails, personalityDesc } from 'utils/constants'
import { ADD_CURRENT_PROFILE } from 'store/profiles'
import Button from 'components/button'

import 'containers/testResult/styles.css'
import Footer from 'components/footer/Footer'

const { innerHeight, innerWidth } = window

const TestResult = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [personType, setPersonType] = useState('null')

  const getUser = async () => {
    try {
      if (user) {
        const { data: details } = await getProfileDetails(user.id)
        dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
        setPersonType(details.personality_type)
      }
    } catch (error) {
      console.log('getting personality errr: ', error)
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  return (
    <>
      <div className='d-flex'>
        <div
          style={{ height: innerHeight - 150, width: innerWidth }}
          className='header-back-result d-flex flex-column justify-content-center align-items-center'
        >
          <h1 className='text-center test-result-h'>Personality Test Results</h1>
          <div className='d-flex col-md-10 mt-4 flex-column'>
            <h1 className='result-per-hea'>Your Personality Type</h1>
            <h1 className='result-per-type'>{personType}</h1>
            <p className='result-per-type-d'>{personalityDesc[personType]}</p>
            <div className='mt-5'>
              <Button title='See Matches' width='13rem' onClick={() => navigate('/matches')} />
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex col-md-10 flex-column'>
          <h1 className='result-char-hea'>Explaination of:</h1>
          <div className='d-flex flex-row mt-5 mb-5'>
            <div className='char-det-border'></div>
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row'>
                <h1 className='char-pers-type-h'>{personType[0]}</h1>
                <p className='char-pers-type-d'>{personalityChaDetails[personType[0]]}</p>
              </div>
              <div className='d-flex flex-row'>
                <h1 className='char-pers-type-h'>{personType[1]}</h1>
                <p className='char-pers-type-d'>{personalityChaDetails[personType[1]]}</p>
              </div>
              <div className='d-flex flex-row'>
                <h1 className='char-pers-type-h'>{personType[2]}</h1>
                <p className='char-pers-type-d'>{personalityChaDetails[personType[2]]}</p>
              </div>
              <div className='d-flex flex-row'>
                <h1 className='char-pers-type-h'>{personType[3]}</h1>
                <p className='char-pers-type-d'>{personalityChaDetails[personType[3]]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TestResult
