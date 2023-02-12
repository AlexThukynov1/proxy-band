import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isPostsLoading: false,
    isPostsError: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetch: state => {state.isPostsLoading = true},
        postsFetched: (state, action) => { state.posts = action.payload; state.isPostsLoading = false},
        postsFetchedError: state => {state.isPostsError = true; state.isPostsLoading = false}
    }
})

export const {postsFetch, postsFetched,postsFetchedError} = postsSlice.actions;
export default postsSlice.reducer