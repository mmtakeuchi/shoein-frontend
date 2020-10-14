import React from 'react';
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import ShoesContainer from './containers/ShoesContainer'

function App() {
  return (
    <div className="App">
      <Home />
      <BrandsContainer />
      <ShoesContainer />
    </div>
  );
}

export default App;
