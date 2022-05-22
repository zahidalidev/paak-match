import { useEffect } from 'react'
import { getProfileDetails } from 'services/profile'
import { useDispatch, useSelector } from 'react-redux'
import { LocationOn, Female, Male, DateRange } from '@mui/icons-material'

import { ADD_CURRENT_PROFILE } from 'store/profiles'
import Footer from 'components/footer/Footer'
import { nodeBaseURL } from 'config/baseURL'

import headerImg from 'assets/profileheadbackground.png'

import 'containers/profiledetail/styles.css'

const { innerHeight, innerWidth } = window

const ProfileDetail = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { currentprofileDetail } = useSelector(state => state.profile)

  const getUser = async () => {
    try {
      const { data: details } = await getProfileDetails(user.id)
      dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
    } catch (error) {
      console.log('Login Error: ', error)
    }
  }

  console.log('currentprofileDetail: sda', currentprofileDetail)
  useEffect(() => {
    getUser()
  }, [user])

  return (
    <>
      <div className='d-flex flex-column'>
        <img
          style={{ height: innerHeight - 550, width: innerWidth - 15 }}
          src={headerImg}
          className='header-back-profile'
        />
        <img className='detail-profile-img' src={`${nodeBaseURL}/${currentprofileDetail.image}`} />
      </div>
      <div className='d-flex justify-content-center align-items-start'>
        <div className='d-flex col-md-4 flex-column ml-1'>
          <h1 className='profile-det-name'>{currentprofileDetail.name}</h1>
          <h3>{currentprofileDetail.occupation}</h3>
          <div className='d-flex flex-row align-align-items-center mt-4'>
            <LocationOn sx={{ height: 30, width: 30, marginRight: 2 }} />
            <h3>{currentprofileDetail.city}</h3>
          </div>
          <div className='d-flex flex-row align-align-items-center mt-4'>
            {currentprofileDetail.gender == 'Male' ? (
              <Male sx={{ height: 30, width: 30, marginRight: 2 }} />
            ) : (
              <Female sx={{ height: 30, width: 30, marginRight: 2 }} />
            )}
            <h3>{currentprofileDetail.gender}</h3>
          </div>
          <div className='d-flex flex-row align-align-items-center mt-4'>
            <DateRange sx={{ height: 30, width: 30, marginRight: 2 }} />
            <h3>{new Date(currentprofileDetail.DOB).toDateString()}</h3>
          </div>
        </div>
        <div className='d-flex col-md-7 flex-column'>
          <div className='d-flex flex-column profile-detail-wrapper1'>
            <h1 className='pro-det-heading'>My Profile</h1>
            <div className='d-flex align-items-center about-wrapper'>
              <h3 className='pro-det-heading text-white mt-1'>About</h3>
            </div>
            <div className='d-flex align-items-center about-d-wrapper'>
              <h5 className='text-black mt-1'>{currentprofileDetail.about}</h5>
            </div>
          </div>

          <div className='d-flex flex-column profile-detail-wrapper1 mt-5 mb-5'>
            <h1 className='pro-det-heading'>More Detail</h1>
            <div className='d-flex flex-row'>
              <h4
                style={{ borderBottom: '2px solid #5d46c2' }}
                className='d-flex prof-det-type-h mr-2'
              >
                About me
              </h4>
              <h4
                style={{ borderBottom: '2px solid #5d46c2' }}
                className='d-flex prof-det-type-h ml-4'
              >
                Personality
              </h4>
            </div>
            <div className='d-flex align-items-center about-d-wrapper mt-5'>
              <h5 className='text-black mt-1'>{currentprofileDetail.about}</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfileDetail
