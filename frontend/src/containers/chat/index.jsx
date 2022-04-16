import SnackbarContent from '@mui/material/SnackbarContent'
import ChatProfile from 'components/chatProfileCard'
import Input from 'components/common/Input'
import { Search } from '@mui/icons-material'
import { SendIcon } from 'utils/constants'

import 'containers/chat/styles.css'

const Chat = () => {
  const { innerHeight } = window
  console.log('document.documentElement.offsetHeight: ', innerHeight)
  return (
    <div className='d-flex align-items-start chat-container-p justify-content-end'>
      <div
        style={{ minHeight: innerHeight - 95 }}
        className='d-flex chat-container-p flex-row col-md-11'
      >
        <div className='d-flex col-md-3 flex-column mt-4 align-items-end'>
          <div className='d-flex search-chat-container justify-content-center align-items-center'>
            <Input title='Password' icon={<Search />} />
          </div>
          <ChatProfile />
          <ChatProfile />
          <ChatProfile />
          <ChatProfile />
          <ChatProfile />
          <ChatProfile />
        </div>
        <div className='col-md-9 chat-wrapper'>
          <Input
            multiline={true}
            title='Write a message'
            width='100%'
            height={null}
            icon={SendIcon}
          />
          <div className='d-flex flex-row message-wrapper'>
            <div className='d-flex col-md-6 align-items-center justify-content-start'>
              <SnackbarContent
                style={{ backgroundColor: '#f3f3f3', color: '#000' }}
                elevation={0}
                message='I love snacks. I love snacks.'
              />
            </div>
            <div className='d-flex col-md-6 align-items-center justify-content-end'>
              <SnackbarContent
                style={{ backgroundColor: '#f3f3f3', color: '#000' }}
                elevation={0}
                message='I love snacks. I love snacks.'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
