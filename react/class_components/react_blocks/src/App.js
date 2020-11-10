import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontents from './components/Subcontents';
import Advertisement from './components/Advertisement';



function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <Subcontents />
            <Subcontents />
            <Subcontents />
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
