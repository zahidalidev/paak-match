import Button from 'components/button'
import { Card } from '@material-ui/core'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

import profileImg from 'assets/Ellipse 13.png'
import prof1 from 'assets/Ellipse15.png'
import tickBox from 'assets/tickbox.png'
import crossBox from 'assets/crossBox.png'

import 'containers/userProfile/styles.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { nodeBaseURL } from 'config/baseURL'
import { getProfileDetails } from 'services/profile'
import { toast } from 'react-toastify'
import Loader from 'components/loader'
import { CompaTable } from 'utils/constants'

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#EBEBEB'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#5D46C2'
  }
}))

const UserProfile = () => {
  const user = useSelector(state => state.user)
  const { matchedProfiles, currentprofileDetail } = useSelector(state => state.profile)
  const path = useParams()
  const [matchedProfile, setMatchedProfile] = useState({})
  const [matchedProfileStored, setMatchedProfileStored] = useState({})
  const [loading, setLoading] = useState(false)
  const [profileDetailsSet, setProfileDetailsSet] = useState([])

  const getMatchedProfile = async () => {
    setLoading(true)
    try {
      const { data } = await getProfileDetails(path.id)
      setMatchedProfile(data)
      const filteredMatched = matchedProfiles.filter(item => item.id == path.id)[0]
      setMatchedProfileStored(filteredMatched)

      const profileDetailsSetTemp = [
        {
          heading: 'Basic preferences',
          details: [
            {
              title: 'Age',
              des: `${filteredMatched.age_range} yrs`,
              icon: ['age1', 'age2', 'age']
                .map(i => filteredMatched.matchedKeys.includes(i))
                .includes(true)
            },
            {
              title: 'Height',
              des: `${filteredMatched.height_range} inch`,
              icon: ['height1', 'height2', 'height']
                .map(i => filteredMatched.matchedKeys.includes(i))
                .includes(true)
            },

            {
              title: 'Marital Status',
              des: filteredMatched.marital_status,
              icon: filteredMatched.matchedKeys.includes('marital_status')
            },
            {
              title: 'Mother Tongue',
              des: filteredMatched.mother_tongue,
              icon: filteredMatched.matchedKeys.includes('mother_tongue')
            },
            {
              title: 'Caste',
              des: filteredMatched.caste,
              icon: filteredMatched.matchedKeys.includes('caste')
            },
            {
              title: 'Education',
              des: filteredMatched.education,
              icon: filteredMatched.matchedKeys.includes('education')
            },
            {
              title: 'Income',
              des: filteredMatched.income,
              icon: filteredMatched.matchedKeys.includes('income')
            }
          ]
        },
        {
          heading: 'Regious Status',
          details: [
            {
              title: 'Religion',
              des: matchedProfileStored.religion,
              icon: filteredMatched.matchedKeys.includes('religion')
            }
          ]
        },
        {
          heading: 'Location Preference',
          details: [
            {
              title: 'Lives in',
              des: matchedProfileStored.city,
              icon: filteredMatched.matchedKeys.includes('city')
            }
          ]
        },
        {
          heading: 'Personality type',
          details: [
            {
              title: 'Compatibility',
              des: CompaTable[currentprofileDetail.personality_type],
              icon: true
            }
          ]
        }
      ]

      setProfileDetailsSet(profileDetailsSetTemp)
    } catch (error) {
      console.log('Error: ', error)
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    getMatchedProfile()
  }, [user, path.id, matchedProfiles])

  console.log('matchedProfileStored: ', matchedProfileStored)
  console.log('currentprofileDetail: ', currentprofileDetail)

  return (
    <div className='d-flex align-items-center justify-content-center home-container'>
      <Loader show={loading} />
      <div className='d-flex flex-row col-md-10 align-items-start'>
        <div className='d-flex flex-column col-md-4 justify-content-end align-items-center'>
          <Card className='d-flex flex-card-profile flex-column justify-content-center align-items-center'>
            <img
              className='profile-img-h'
              src={`${nodeBaseURL}/${matchedProfile.image}`}
              alt='Profile Image'
            />
            <h5 className='profile-heading-h'>{matchedProfile.name}</h5>
            <p className='profile-title-h'>{matchedProfile.occupation}</p>
            <span className='horizontal-c-barder' />
            <div className='d-flex flex-row btn-pro-h'>
              <div className='mr-2 ml-2'>
                <Button borderRadius='10px' title='Send Interest' width='9rem' height='2.8rem' />
              </div>
              <div className='mr-2 ml-2'>
                <Button borderRadius='10px' title='Message' width='9rem' height='2.8rem' />
              </div>
            </div>
            <div className='d-flex flex-column col-md-11 justify-content-start mt-2 mb-2'>
              <h5 className='profile-completion'>TYPE: {matchedProfile.personality_type}</h5>
              <ul>
                <li>{matchedProfile.age} years old</li>
                <li>Mother Tongue {matchedProfile.mother_tongue}</li>
                <li>{matchedProfile.religion}</li>
                <li>Education {matchedProfile.education}</li>
                <li>Working as {matchedProfile.occupation}</li>
              </ul>
            </div>
          </Card>
        </div>
        <div className='d-flex flex-column col-md-8'>
          <div className='d-flex flex-column recent-h p-4'>
            <div className='d-flex flex-row align-items-center'>
              <h5 className='recent-heading-h header-profile'>
                See how well your personality type matches
              </h5>
            </div>
            <div className='d-flex flex-row justify-content-start'>
              <div className='d-flex flex-row recent-h-container'>
                <div className='d-flex matches-p-wrapper flex-column justify-content-center align-items-center '>
                  <img className='recent-profile-img' src={profileImg} />
                </div>
              </div>
              <div className='d-flex flex-row col-md-2 justify-content-center align-items-center'>
                <Box sx={{ flexGrow: 1 }}>
                  <p className='type-matches-p-h'>Type match {matchedProfileStored.points * 10}%</p>
                  <BorderLinearProgress
                    variant='determinate'
                    value={matchedProfileStored.points * 10}
                  />
                </Box>
              </div>
              <div className='d-flex flex-row recent-h-container'>
                <div className='d-flex matches-p-wrapper flex-column justify-content-center align-items-center '>
                  <img className='recent-profile-img' src={prof1} />
                </div>
              </div>
            </div>

            <span className='horizontal-usr-p-border ' />

            <div className='d-flex flex-column justify-content-start ml-3'>
              {profileDetailsSet.map((item, index) => (
                <div key={index.toString()}>
                  <h5 className='recent-heading-h profile-details mb-4'>{item.heading}</h5>
                  {item.details.map((item2, index2) => (
                    <div key={index2.toString()} className='d-flex flex-row col-md-12 mt-1 mb-1'>
                      <div className='d-flex col-md-3'>
                        <img
                          className='checkbox-p-details mr-3'
                          src={item2.icon ? tickBox : crossBox}
                        />
                        <p>{item2.title}</p>
                      </div>
                      <div className='d-flex col-md-9'>
                        <p>{item2.des}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
