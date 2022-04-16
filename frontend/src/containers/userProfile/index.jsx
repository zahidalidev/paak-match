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
import { profileDetails } from 'utils/constants'

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
  return (
    <div className='d-flex align-items-center justify-content-center home-container'>
      <div className='d-flex flex-row col-md-10 align-items-start'>
        <div className='d-flex flex-column col-md-4 justify-content-end align-items-center'>
          <Card className='d-flex flex-card-profile flex-column justify-content-center align-items-center'>
            <img className='profile-img-h' src={profileImg} alt='Profile Image' />
            <h5 className='profile-heading-h'>John Doe</h5>
            <p className='profile-title-h'>Computer Scientist</p>
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
              <h5 className='profile-completion'>TYPE: INFP</h5>
              <ul>
                <li>22 years old</li>
                <li>Mother Tongue Urdu</li>
                <li>Muslim</li>
                <li>Studied BSc Zoology</li>
                <li>Working as Freelancer</li>
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
                  <p className='type-matches-p-h'>Type match 89%</p>
                  <BorderLinearProgress variant='determinate' value={89} />
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
              {profileDetails.map((item, index) => (
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
