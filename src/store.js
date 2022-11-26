import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './redux/userslice'
const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export default Store
