import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isSearching: false,
    areThereMore: false,
    currentPage: 1,
    query: '',
    results: []
  },
  reducers: {
    newResults: (state, action) => {
      state.results = action.payload.photos
      state.areThereMore = action.payload.areThereMore
      state.query = action.payload.query
      state.isSearching = false
      state.currentPage = 1
    },
    appendResults: (state, action) => {
      state.results = state.results.concat(action.payload.photos)
      state.areThereMore = action.payload.areThereMore
      state.isSearching = false;
      state.currentPage++;
    },
    startSearch: state => {
      state.isSearching = true
      state.results = []
    },
    startAppend: state => { isSearching = true},
    setSearch: (state, action) => { state.query = action.payload }
  },
});

export const { newResults, appendResults, startSearch, startAppend } = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getResults = state => state.search.results;
export const isSearching = state => state.search.isSearching;
export const getAreThereMore = state => state.search.areThereMore;
export const getQuery = state => state.search.query;
export const getCurrentPage = state => state.search.currentPage;

export default searchSlice.reducer;