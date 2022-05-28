import { useEffect, useState } from 'react'
import { Card } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Home, Article, Photo, People, Person, Search } from '@mui/icons-material'

import Button from 'components/button'
import { matchedUserProfile, getProfileDetails } from 'services/profile'

import { toast } from 'react-toastify'
import { nodeBaseURL } from 'config/baseURL'

import 'containers/matches/styles.css'
import { ADD_CURRENT_PROFILE, ADD_MATCHED_PROFILE } from 'store/profiles'
import Footer from 'components/footer/Footer'
import Input from 'components/common/Input'

const Matches = () => {
  const { pathname } = useLocation()
  const user = useSelector(state => state.user)
  const { currentprofileDetail, matchedProfiles } = useSelector(state => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [filteredProfile, setFilteredProfile] = useState([])

  const sideBarHomeMenues = [
    {
      title: 'Home',
      path: '/home',
      icon: <Home sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    },
    {
      title: 'Profile',
      path: '/profiledetail',
      icon: <Person sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    },
    {
      title: 'Edit Preferences',
      path: `/preferences/${user.id}`,
      icon: <Article sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    },
    {
      title: 'Your Matches',
      path: '/matches',
      icon: <Photo sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    },
    {
      title: 'Edit Profile',
      path: `/createprofile/${user.id}`,
      icon: <People sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    }
  ]

  const getMatchedProfiles = async () => {
    try {
      const { data } = await matchedUserProfile(user.id)
      if (data) {
        setFilteredProfile(data)
        dispatch(ADD_MATCHED_PROFILE({ matchedProfiles: data }))
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const getUser = async () => {
    try {
      const { data: details } = await getProfileDetails(user.id)
      dispatch(ADD_CURRENT_PROFILE({ currentprofileDetail: details }))
    } catch (error) {
      console.log('Login Error: ', error)
    }
  }

  useEffect(() => {
    getMatchedProfiles()
    getUser()
  }, [user])

  const handleSearch = value => {
    const tempProf = [...matchedProfiles]
    const tempFilteredProfile = tempProf.filter(item => item.name.includes(value))
    setFilteredProfile(tempFilteredProfile)
  }

  console.log('currentprofileDetail: ', currentprofileDetail)
  console.log('matchedProfiles: ', matchedProfiles)
  return (
    <>
      <div className='d-flex align-items-center justify-content-center home-container'>
        <div className='d-flex flex-row col-md-10 align-items-start'>
          <div className='d-flex flex-column col-md-3 justify-content-end align-items-center'>
            <Card className='d-flex profile-card-h flex-column justify-content-center align-items-center'>
              <img
                className='profile-img-h'
                src={`${nodeBaseURL}/${currentprofileDetail.image}`}
                alt='Profile Image'
              />
              <h5 className='profile-heading-h'>{currentprofileDetail.name}</h5>
              <p className='profile-title-h'>{currentprofileDetail.occupation}</p>
              <span className='horizontal-c-barder' />
              <h6 className='profile-completion'>
                Perosnality Type: {currentprofileDetail.personality_type}
              </h6>
              <div className='btn-pro-h'>
                <Button
                  onClick={() =>
                    currentprofileDetail.plan === 'premium'
                      ? toast.info('You are a Premium Member')
                      : navigate('/subscription')
                  }
                  title={currentprofileDetail.plan === 'premium' ? 'Premium' : 'Upgrade Pro'}
                  width='15.5rem'
                  height='2.8rem'
                />
              </div>
            </Card>
            <div className='d-flex flex-column side-menues-h justify-content-center align-items-start mb-4'>
              {sideBarHomeMenues.map(item => (
                <div
                  onClick={() => navigate(item.path)}
                  className={`d-flex ${
                    pathname === item.path ? 'menu-container-active' : null
                  } menu-container-h flex-row justify-content-start align-items-center`}
                  key={item.title}
                >
                  {item.icon}
                  <h6 className='menu-heading-h'>{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className='d-flex flex-column col-md-9'>
            <div className='d-flex mb-5' style={{ marginLeft: -10 }}>
              <Input
                handleChange={e => handleSearch(e.target.value)}
                width='30rem'
                icon={<Search />}
                title='Search'
              />
            </div>
            <div className='d-flex flex-column new-matches-h p-4'>
              <div className='d-flex flex-row align-items-center'>
                <div className='d-flex flex-column'>
                  <h5 className='recent-heading-h'>Matches</h5>
                  <h5 className='new-match-heading-h'>
                    PAAKMATCH, Found {matchedProfiles.length} Members{' '}
                  </h5>
                </div>
              </div>
              <div className='d-flex flex-row recent-h-container'>
                {filteredProfile.map((item, index) => (
                  <div
                    onClick={() => navigate(`/profile/${item.id}`)}
                    key={index.toString()}
                    className='d-flex matches-h-wrapper col-md-2 flex-column justify-content-center align-items-start'
                  >
                    <img className='matches-profile-img' src={nodeBaseURL + '/' + item.image} />
                    <h5 className='recent-profile-c matches-name ml-1'>{item.name}</h5>
                    <p className='matches-profile-c ml-1'>
                      {item.points}%, Type: {item.personality_type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Matches
