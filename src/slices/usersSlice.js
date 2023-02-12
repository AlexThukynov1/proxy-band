import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    isLoadingUsers: false,
    isLoadingError: false,
    curentUser: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetch: state => {state.isLoadingUsers = true},
        usersFetched: (state, action) => { state.users = action.payload; state.isLoadingUsers = false},
        usersFetchedError: state => {state.isLoadingError = true; state.isLoadingUsers = false},
        usersSetCurrent: (state, action) => {state.curentUser = action.payload}
    }
})

export const {usersFetch, usersFetched, usersFetchedError,usersSetCurrent} = usersSlice.actions;
export default usersSlice.reducer