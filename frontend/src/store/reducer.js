import { combineReducers } from 'redux'

import userReducer from 'store/user'

export default combineReducers({
  user: userReducer
})
