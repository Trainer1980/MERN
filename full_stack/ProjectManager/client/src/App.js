import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import ProductMain from './views/ProductMain';
import ProductDetail from './views/ProductDetail';
import ProductUpdate from './views/ProductUpdate';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductMain path = 'products/' />
        <ProductDetail path = 'products/:id' />
        <ProductUpdate path = 'products/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
