import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [ currentBxc, setCurrentBxc ] = useState("")

  const gotNewBx = ( newBx ) => {
    setCurrentBxc(newBx);
  };

  return (
    <div className="App">
      <BoxForm onNewColor = { gotNewBx } />
      <BoxDisplay box = { currentBxc } />
    </div>
  );
}

export default App;
