import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import Container from 'react-bootstrap/Container'

function App() {
  
  return (
    <div className="App">
      <Container >
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
          <BrandsContainer />
          
        </Container>
    </div>
  );
}

export default App;
