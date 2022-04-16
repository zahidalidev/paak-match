import 'components/chatProfileCard/styles.css'

import prof1 from 'assets/Ellipse15.png'

const ChatProfile = () => {
  return (
    <div className='d-flex flex-row chat-profile-wrapper justify-content-start align-items-center'>
      <div className='left-chat-bar' />
      <img className='chat-profile-img' src={prof1} />
      <div className='d-flex flex-column chat-profile-c justify-content-center'>
        <p className='chat-profile-name'>John Doe</p>
        <p className='chat-last-seen'>Was that designer by you?</p>
      </div>
    </div>
  )
}

export default ChatProfile
