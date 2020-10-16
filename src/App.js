import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App">
      {/* <Container> */}
          <Navbar />
          {/* <SearchBar /> */}
          
          <Switch>
            <Route exact path="/" component={ Home } />
            {/* <Route exact path="/brands" render={(props) => <BrandsContainer {...props} />}/> */}
            {/* <Route exact path="/shoes" component={ ShoesContainer } /> */}
          </Switch>
          <BrandsContainer />
        {/* </Container> */}
    </div>
  );
}

export default App;
