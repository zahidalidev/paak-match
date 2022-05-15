import PropTypes from 'prop-types'

import { nodeBaseURL } from 'config/baseURL'

import 'components/chatProfileCard/styles.css'

const ChatProfile = ({ data, message, onClick, active }) => {
  return (
    <div
      style={{ backgroundColor: active && '#8f8ec370' }}
      onClick={onClick}
      className='d-flex flex-row chat-profile-wrapper justify-content-start align-items-center'
    >
      <div className='left-chat-bar' />
      <img className='chat-profile-img' src={`${nodeBaseURL}/${data.image}`} />
      <div className='d-flex flex-column chat-profile-c justify-content-center'>
        <p className='chat-profile-name'>{data.name}</p>
        <p className='chat-last-seen'>{message}</p>
      </div>
    </div>
  )
}

ChatProfile.propTypes = {
  data: PropTypes.object.isRequired,
  message: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default ChatProfile
