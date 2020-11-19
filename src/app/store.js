import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import navReducer from '../features/navbar/navSlice';
import chatReducer from '../features/chat/chatSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    nav: navReducer,
    chat: chatReducer
  },
});
