import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Search } from './features/search/Search';
import './App.css';

function App() {
  return (
    <div className="App container-sm">
        <Search />
    </div>
  );
}

export default App;
