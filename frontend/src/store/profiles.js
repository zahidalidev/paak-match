import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'profile',
  initialState: { currentprofileDetail: {}, matchedProfiles: [] },
  reducers: {
    ADD_CURRENT_PROFILE: (profile, action) => {
      profile.currentprofileDetail = action.payload.currentprofileDetail
    },

    UPDATE_CURRENT_ROFILE: (profile, action) => {
      profile.currentprofileDetail = action.payload.currentprofileDetail
    },

    ADD_MATCHED_PROFILE: (profile, action) => {
      profile.matchedProfiles = action.payload.matchedProfiles
    }
  }
})

export const { ADD_CURRENT_PROFILE, UPDATE_CURRENT_ROFILE, ADD_MATCHED_PROFILE } = slice.actions
export default slice.reducer
