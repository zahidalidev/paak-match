import { combineReducers } from 'redux'

import userReducer from 'store/user'
import profileReducer from 'store/profiles'

export default combineReducers({
  user: userReducer,
  profile: profileReducer
})
