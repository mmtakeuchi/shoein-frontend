import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import ShoesContainer from './containers/ShoesContainer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          {/* <Route exact path="/brands" render={(props) => <BrandsContainer {...props} />}/> */}
          {/* <Route exact path="/shoes" component={ ShoesContainer } /> */}
        </Switch>
        <BrandsContainer />
    </div>
  );
}

export default App;
