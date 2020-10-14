import React from 'react';
// import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import ShoesContainer from './containers/ShoesContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BrandsContainer />
      <ShoesContainer />
    </div>
  );
}

export default App;
