import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    page: 'chat'
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  }
})

export const {setPage} = navSlice.actions;

export const getPage = state => state.nav.page;

export default navSlice.reducer;