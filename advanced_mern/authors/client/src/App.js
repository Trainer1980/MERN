import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import AuthorMain from './views/AuthorMain';
import AuthorNew from './views/AuthorNew';
import AuthorUpdate from './views/AuthorUpdate';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AuthorMain path = '/'/>
        <AuthorNew path = '/new' />
        <AuthorUpdate path ='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
