import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { token: '', name: '', email: '', id: '' },
  reducers: {
    USER_REGISTER: (user, action) => {
      user.token = action.payload.token
      user.name = action.payload.name
      user.email = action.payload.email
      user.id = action.payload.id
      localStorage.setItem('token', JSON.stringify(user.token))
      localStorage.setItem('email', JSON.stringify(user.email))
    },
    USER_LOGIN: (user, action) => {
      user.token = action.payload.token
      user.name = action.payload.name
      user.email = action.payload.email
      user.id = action.payload.id
      localStorage.setItem('token', JSON.stringify(user.token))
      localStorage.setItem('email', JSON.stringify(user.email))
    },
    USER_LOGOUT: user => {
      user.token = ''
      user.name = ''
      user.email = ''
      user.id = ''
      localStorage.removeItem('token')
      localStorage.removeItem('email')
    }
  }
})

export const { USER_REGISTER, USER_LOGIN, USER_LOGOUT } = slice.actions
export default slice.reducer
