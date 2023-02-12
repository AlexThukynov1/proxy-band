import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    albums: [],
    isAlbumsLoading: false,
    isAlbumsError: false,
    isAlbumsVisible: false
}

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        albumsFetch: state => {state.isAlbumsLoading = true},
        albumsFetched: (state, action) => { state.albums = action.payload; state.isAlbumsLoading = false},
        albumsFetchedError: state => {state.isAlbumsError = true; state.isAlbumsLoading = false},
        albumsShowTogle: state => {state.isAlbumsVisible = !state.isAlbumsVisible}
    }
})

export const {albumsFetch, albumsFetched, albumsFetchedError,albumsSetCurrent,albumsShowTogle} = albumsSlice.actions;
export default albumsSlice.reducer