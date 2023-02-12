import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../slices/usersSlice'
import postsReducer from '../slices/postsSlice'
import albumsReducer from '../slices/albumsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    albums: albumsReducer
  },
})