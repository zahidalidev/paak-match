import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { token: '', name: '', email: '' },
  reducers: {
    USER_REGISTER: (user, action) => {
      user.token = action.payload.token
      user.name = action.payload.name
      user.email = action.payload.email
      localStorage.setItem('token', JSON.stringify(user.token))
    },
    USER_LOGIN: (user, action) => {
      user.token = action.payload.token
      user.name = action.payload.name
      user.email = action.payload.email
      localStorage.setItem('token', JSON.stringify(user.token))
    },
    USER_LOGOUT: user => {
      user.token = ''
      user.name = ''
      user.email = ''
      localStorage.removeItem('token')
    }
  }
})

export const { USER_REGISTER, USER_LOGIN, USER_LOGOUT } = slice.actions
export default slice.reducer
