import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { People, CardMembershipSharp } from '@mui/icons-material'

import { getAllUser, getAllUserSubscriptions } from 'services/user'
import { toast } from 'react-toastify'

import profiletemp from 'assets/profiletemp.png'
import 'containers/admin/styles.css'
import SubscriptionCard from 'components/SubscriptionCard'
import { nodeBaseURL } from 'config/baseURL'

const Admin = () => {
  const user = useSelector(state => state.user)
  const [allUsers, setAllUsers] = useState([])
  const [allSubscriptions, setAllSubscriptions] = useState([])
  const [activeBtn, setActiveBtn] = useState('All Users')

  const sideBarHomeMenues = [
    {
      title: 'All Users',
      icon: <People sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    },
    {
      title: 'All Subscriptions',
      icon: <CardMembershipSharp sx={{ height: 25, width: 25 }} className='home-menu-icons' />
    }
  ]

  const allUserProfiles = async () => {
    try {
      const { data } = await getAllUser(user.id)
      setAllUsers(data)
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const allUserSubscriptions = async () => {
    try {
      const { data } = await getAllUserSubscriptions()
      setAllSubscriptions(data)
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  useEffect(() => {
    allUserProfiles()
    allUserSubscriptions()
  }, [user])

  return (
    <div className='d-flex align-items-center justify-content-center home-container'>
      <div className='d-flex flex-row col-md-10 align-items-start'>
        <div className='d-flex flex-column col-md-3 justify-content-end align-items-center'>
          <div className='d-flex flex-column side-menues-h justify-content-center align-items-start'>
            {sideBarHomeMenues.map(item => (
              <div
                onClick={() => setActiveBtn(item.title)}
                className={`d-flex ${
                  activeBtn === item.title ? 'menu-container-active' : null
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
          <div className='d-flex flex-column new-matches-h p-4'>
            <div className='d-flex flex-row align-items-center'>
              <div className='d-flex flex-column'>
                <h5 className='recent-heading-h'>{activeBtn}</h5>
                <h5 className='new-match-heading-h'>
                  PAAKMATCH, Found{' '}
                  {activeBtn === 'All Users'
                    ? `${allUsers.length} Members`
                    : `${allSubscriptions.length} Subscriptions`}
                </h5>
              </div>
            </div>
            <div className='d-flex flex-row recent-h-container ml-4'>
              {activeBtn === 'All Subscriptions'
                ? allSubscriptions.map((item, index) => (
                    <div key={index.toString()} className='d-flex subscription-card-wrapper'>
                      <SubscriptionCard sub={item} />
                    </div>
                  ))
                : allUsers.map((item, index) => (
                    <div
                      onClick={() => navigate(`/profile/${item.id}`)}
                      key={index.toString()}
                      className='d-flex matches-h-wrapper-admin col-md-2 flex-column justify-content-center align-items-start'
                    >
                      <img
                        className='matches-profile-img-admin'
                        src={item.image ? `${nodeBaseURL}/${item.image}` : profiletemp}
                      />
                      <h5 className='recent-profile-c matches-name ml-1'>
                        {item.name}, {item.personality_type}
                      </h5>
                      <p className='matches-profile-c-admin ml-1'>
                        Contact: {item.contact_number * 10}
                      </p>
                      <p className='matches-profile-c-admin ml-1'>Email: {item.email}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
