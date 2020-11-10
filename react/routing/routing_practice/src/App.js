import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Number from './components/Number';
import Hello from './components/Hello';
import HelloWColor from './components/HelloWColor'

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path = '/welcome' />
        <Number path = '/:id' />
        <Hello path = '/:word' />
        <HelloWColor path = '/:word/:tcolor/:bcolor' />
      </Router>
    </div>
  );
}

export default App;
