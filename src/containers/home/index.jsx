import Button from 'components/button'
import { Card } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import { newMatches, recentMatches, sideBarHomeMenues } from 'utils/constants'

import profileImg from 'assets/Ellipse 13.png'

import 'containers/home/styles.css'

const index = () => {
  const { pathname } = useLocation()

  return (
    <div className='d-flex align-items-center justify-content-center home-container'>
      <div className='d-flex flex-row col-md-10 align-items-start'>
        <div className='d-flex flex-column col-md-3 justify-content-end align-items-center'>
          <Card className='d-flex profile-card-h flex-column justify-content-center align-items-center'>
            <img className='profile-img-h' src={profileImg} alt='Profile Image' />
            <h5 className='profile-heading-h'>John Doe</h5>
            <p className='profile-title-h'>Computer Scientist</p>
            <span className='horizontal-c-barder' />
            <h6 className='profile-completion'>Your Profile is complete 100%</h6>
            <div className='btn-pro-h'>
              <Button title='Upgrade Pro' width='15.5rem' height='2.8rem' />
            </div>
          </Card>

          <div className='d-flex flex-column side-menues-h justify-content-center align-items-start'>
            {sideBarHomeMenues.map(item => (
              <div
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
          <div className='d-flex flex-column recent-h p-4'>
            <div className='d-flex flex-row align-items-center'>
              <h5 className='recent-heading-h'>Recent Matches</h5>
              <div className='d-flex flex-row align-items-center'>
                <h5 className='recent-sub-heading-h'>View All</h5>
                <ArrowForward sx={{ height: 25, width: 25 }} />
              </div>
            </div>
            <div className='d-flex flex-row recent-h-container'>
              {recentMatches.map((item, index) => (
                <div
                  key={index.toString()}
                  className='d-flex recent-h-wrapper flex-column justify-content-center align-items-center '
                >
                  <img className='recent-profile-img' src={item.profileImg} />
                  <h5 className='recent-profile-c'>{item.name}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className='d-flex flex-column new-matches-h p-4'>
            <div className='d-flex flex-row align-items-center'>
              <div className='d-flex flex-column'>
                <h5 className='recent-heading-h'>12 New Matches</h5>
                <h5 className='new-match-heading-h'>PAAKMATCH Members recently joined</h5>
              </div>
              <div className='d-flex flex-row align-items-center'>
                <h5 className='recent-sub-heading-h'>View All</h5>
                <ArrowForward sx={{ height: 25, width: 25 }} />
              </div>
            </div>
            <div className='d-flex flex-row recent-h-container'>
              {newMatches.map((item, index) => (
                <div
                  key={index.toString()}
                  className='d-flex matches-h-wrapper flex-column justify-content-center align-items-start '
                >
                  <img className='matches-profile-img' src={item.profileImg} />
                  <h5 className='recent-profile-c matches-name'>{item.name}</h5>
                  <p className='matches-profile-c'>
                    {item.age}, Type: {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='d-flex flex-column new-matches-h p-4'>
            <div className='d-flex flex-row align-items-center'>
              <div className='d-flex flex-column'>
                <h5 className='recent-heading-h'>100 Total Matches</h5>
                <h5 className='new-match-heading-h'>PAAKMATCH Members recently joined</h5>
              </div>
              <div className='d-flex flex-row align-items-center'>
                <h5 className='recent-sub-heading-h'>View All</h5>
                <ArrowForward sx={{ height: 25, width: 25 }} />
              </div>
            </div>
            <div className='d-flex flex-row recent-h-container'>
              {newMatches.map((item, index) => (
                <div
                  key={index.toString()}
                  className='d-flex matches-h-wrapper flex-column justify-content-center align-items-start '
                >
                  <img className='matches-profile-img-total' src={item.profileImg} />
                  <h5 className='recent-profile-c matches-name'>{item.name}</h5>
                  <p className='matches-profile-c'>
                    {item.age}, Type: {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
