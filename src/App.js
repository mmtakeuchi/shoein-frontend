import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { getBrands } from './actions/brandActions'
import { getShoes } from './actions/shoeActions'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import Container from 'react-bootstrap/Container'

class App extends Component {
  
  componentDidMount = () => {
        this.props.getBrands()
        this.props.getShoes()
    }

  render() {

    return (
      <div className="App">
        <Container >
            <Navbar />
            <Switch>
              <Route exact path="/" component={ Home } />
            </Switch>
            <BrandsContainer brands={this.props.brands.brands} shoes={this.props.shoes.shoes}/> 
          </Container>
      </div>
    );
  }
}

const mapStateFromProps = (state) => ({ 
    brands: state.brands,
    shoes: state.shoes
})

const mapDispatchToProps = (dispatch) => ({
    getBrands: () => dispatch(getBrands()),
    getShoes: () => dispatch(getShoes())
})

export default connect(mapStateFromProps, mapDispatchToProps)(App)
