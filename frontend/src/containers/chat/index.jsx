import SnackbarContent from '@mui/material/SnackbarContent'
import ChatProfile from 'components/chatProfileCard'
import Input from 'components/common/Input'
import { Search } from '@mui/icons-material'
import { Send } from '@mui/icons-material'
import { useParams, useNavigate } from 'react-router-dom'

import { getChat, getChatRef, saveChat, getCurrentUserFriends } from 'services/chat'

import 'containers/chat/styles.css'
import { useEffect, useState } from 'react'

const Chat = () => {
  const { innerHeight } = window
  const param = useParams()
  const navigate = useNavigate()
  const [chats, setChats] = useState([])
  const [messageField, setMessageField] = useState('')
  const [currentFriends, setCurrentFriends] = useState([])

  useEffect(() => {
    getMessages()
  }, [param])

  const getMessages = async () => {
    try {
      let chatRef = await getChatRef()

      chatRef.onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(async () => {
          let chatRes = await getChat(param.id1, param.id2)
          const tempCurrentFriends = await getCurrentUserFriends(param.id1)
          chatRes.chat.sort((a, b) => new Date(b.date) - new Date(a.date))
          setChats(chatRes.chat)
          if (currentFriends != tempCurrentFriends) {
            setCurrentFriends(tempCurrentFriends)
          }
        })
      })
    } catch (error) {
      console.log('chats error: ', error)
    }
  }

  const sendMessage = async () => {
    const body = {
      user1: param.id1,
      user2: param.id2,
      chat: [
        {
          user: param.id2,
          message: messageField,
          date: Date.now()
        }
      ]
    }
    try {
      await saveChat(body)
      setMessageField('')
    } catch (error) {
      console.log('Chat Error: ', error)
    }
  }

  const handleAnotherChat = id => {
    navigate(`/chat/${param.id1}/${id}`)
  }

  return (
    <div className='d-flex align-items-start chat-container-p justify-content-end'>
      <div
        style={{ minHeight: innerHeight - 95, maxHeight: innerHeight - 95 }}
        className='d-flex chat-container-p flex-row col-md-11'
      >
        <div className='d-flex col-md-3 flex-column mt-4 align-items-end'>
          <div className='d-flex search-chat-container justify-content-center align-items-center'>
            <Input title='Password' icon={<Search />} />
          </div>
          {currentFriends.map((item, index) => (
            <ChatProfile
              onClick={() => handleAnotherChat(item.id)}
              data={item}
              active={item.id == param.id2}
              message={currentFriends[currentFriends.length - (index + 1)].message}
              key={index.toString()}
            />
          ))}
        </div>
        <div className='col-md-9 chat-wrapper'>
          <Input
            title='Write a message'
            width='100%'
            value={messageField}
            handleChange={e => setMessageField(e.target.value)}
            height={null}
            onEnter={sendMessage}
            icon={
              <div
                onClick={sendMessage}
                style={{ backgroundColor: '#5D46C2', padding: 6, borderRadius: 5 }}
              >
                <Send sx={{ height: 22, width: 22 }} style={{ color: '#ffffff' }} />
              </div>
            }
          />
          {chats.map((item, index) => (
            <div key={index.toString()} className='d-flex flex-row message-wrapper'>
              <div className='d-flex col-md-6 align-items-center justify-content-start'>
                {item.user === param.id1 ? (
                  <SnackbarContent
                    style={{ backgroundColor: '#f3f3f3', color: '#000' }}
                    elevation={0}
                    message={item.message}
                  />
                ) : null}
              </div>
              <div className='d-flex col-md-6 align-items-center justify-content-end'>
                {item.user === param.id2 ? (
                  <SnackbarContent
                    style={{ backgroundColor: '#f3f3f3', color: '#000' }}
                    elevation={0}
                    message={item.message}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chat
