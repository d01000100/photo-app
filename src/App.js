import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './features/navbar/Navbar';
import { getPage } from './features/navbar/navSlice';
import { Search } from './features/search/Search';
import { Chat } from './features/chat/Chat';
import './App.css';

function App() {
  const page = useSelector(getPage)

  return (
    <div className="App container-sm">
      {
        page == "search" ? <Search /> :
        page == "chat" ? <Chat /> : ""
      }
      <NavBar />
    </div>
  );
}

export default App;
