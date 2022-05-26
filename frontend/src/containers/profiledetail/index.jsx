import { useEffect, useState } from 'react'
import { getProfileDetails } from 'services/profile'
import { useDispatch, useSelector } from 'react-redux'
import { LocationOn, Female, Male, DateRange } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Article, Photo, People, Person } from '@mui/icons-material'

import { ADD_CURRENT_PROFILE } from 'store/profiles'
import Footer from 'components/footer/Footer'
import { nodeBaseURL } from 'config/baseURL'
import { personalityDesc } from 'utils/constants'
import Button from 'components/button'

import headerImg from 'assets/profileheadbackground.png'

import 'containers/profiledetail/styles.css'
import Input from 'components/common/Input'
import { addFeedBack } from 'services/user'
import { toast } from 'react-toastify'
import Loader from 'components/loader'

const { innerHeight, innerWidth } = window

const ProfileDetail = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [currentDet, setCurrentDet] = useState('personality')
  const { currentprofileDetail } = useSelector(state => state.profile)
  const [fname, setFName] = useState('')
  const [fdesc, setFDesc] = useState('')
  const [loading, setLoading] = useState(false)

  const sideBarHomeMenues = [
    {
      title: 'Home',
      path: '/home',
      icon: <Home sx={{ height: 35, width: 35 }} className='home-menu-icons' />
    },
    {
      title: 'Profile',
      path: '/profiledetail',
      icon: <Person sx={{ height: 35, width: 35 }} className='home-menu-icons' />
    },
    {
      title: 'Edit Preferences',
      path: `/preferences/${user.id}`,
      icon: <Article sx={{ height: 35, width: 35 }} className='home-menu-icons' />
    },
    {
      title: 'Your Matches',
      path: '/matches',
      icon: <Photo sx={{ height: 35, width: 35 }} className='home-menu-icons' />
    },
    {
      title: 'Edit Profile',
      path: `/createprofile/${user.id}`,
      icon: <People sx={{ height: 35, width: 35 }} className='home-menu-icons' />
    }
  ]

  const getUser = async () => {
    try {
      const { data: details } = await getProfileDetails(user.id)
      dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
    } catch (error) {
      console.log('Login Error: ', error)
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  const handleFeedBack = async () => {
    try {
      setLoading(true)
      await addFeedBack({
        name: fname,
        description: fdesc,
        image: currentprofileDetail.image,
        userId: user.id
      })
      toast.success('Thanks for your feedback.')
    } catch (error) {
      toast.error('Feedback Error')
      console.log('Feedback Error: ', error)
    }
    setLoading(false)
  }

  return (
    <>
      <Loader show={loading} />
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
          <div
            style={{
              width: '37rem',
              height: '2px',
              backgroundColor: '#bfbfbf80',
              marginTop: '1.4rem'
            }}
          ></div>
          <div className='d-flex flex-column side-menues-h detail-routes-prof justify-content-center align-items-start'>
            {sideBarHomeMenues.map(item => (
              <div
                onClick={() => navigate(item.path)}
                className={`d-flex ${
                  pathname === item.path ? 'menu-container-active' : null
                } menu-container-h flex-row justify-content-start align-items-center`}
                key={item.title}
              >
                {item.icon}
                <h6 className='menu-heading-h-detail'>{item.title}</h6>
              </div>
            ))}
          </div>
          <div
            style={{
              width: '37rem',
              height: '2px',
              backgroundColor: '#bfbfbf80',
              marginTop: '1.4rem'
            }}
          ></div>
          <div className='d-flex flex-column side-menues-h detail-routes-prof justify-content-center align-items-start'>
            <h3 className='pro-det-heading ml-4 mb-4  mt-3'>Add Feedback</h3>
            <div className='d-flex ml-3'>
              <Input
                value={fname}
                handleChange={e => setFName(e.target.value)}
                title='Your and your patner name'
                width='20rem'
              />
            </div>
            <div className='d-flex mt-5 mb-3 ml-3'>
              <Input
                value={fdesc}
                handleChange={e => setFDesc(e.target.value)}
                title='Share somthing...'
                width='30rem'
              />
            </div>
            <div className='d-flex ml-4 mt-5 mb-5'>
              <Button onClick={handleFeedBack} height='3rem' title='Submit' />
            </div>
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
                style={{ color: currentDet === 'aboutme' ? '#5d46c2' : '#5d46c250' }}
                className='d-flex prof-det-type-h mr-2'
                onClick={() => setCurrentDet('aboutme')}
              >
                About me
              </h4>
              <h4
                style={{ color: currentDet === 'personality' ? '#5d46c2' : '#5d46c250' }}
                className='d-flex prof-det-type-h ml-4'
                onClick={() => setCurrentDet('personality')}
              >
                Personality
              </h4>
            </div>
            {currentDet === 'personality' ? (
              <div className='d-flex align-items-center about-d-wrapper mt-4'>
                <div className='d-flex col-md-12 mb-4 flex-column'>
                  <h1 className='result-per-heading-det'>Your Personality Type</h1>
                  <h1 className='result-per-type'>{currentprofileDetail.personality_type}</h1>
                  <p className='result-per-type-det'>
                    {personalityDesc[currentprofileDetail.personality_type]}
                  </p>
                  <div className='mt-5'>
                    <Button title='Retake Test' width='13rem' onClick={() => navigate('/test')} />
                  </div>
                </div>
              </div>
            ) : (
              <div className='d-flex align-items-center about-d-wrapper mt-4'>
                <div className='d-flex col-md-12 mb-4 flex-column'>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Religion</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.religion}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Mother tongue</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.mother_tongue}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Status</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.marital_status}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Hieght</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.height}&quot;</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Caste</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.caste}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Education</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.education}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Ocupation</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.occupation}</h5>
                    </div>
                  </div>
                  <div className='d-flex align-items-center profile-det-box'>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white det-abt-headings'>Income</h5>
                    </div>
                    <div className='d-flex col-md-6'>
                      <h5 className='mt-1 text-white'>{currentprofileDetail.income}</h5>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfileDetail
