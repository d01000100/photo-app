import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { NavBar } from './features/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App container-sm">
      <BrowserRouter>
        <Routes />
        <NavBar />
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
