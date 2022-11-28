import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    token: null,
  },
  reducers: {
    fillToken(state, action) {
      state.token = action.payload.token
    },
    displayUser(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    logout(state) {
      state.token = null
    },
  },
})

export const { displayUser, fillToken, logout } = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer
