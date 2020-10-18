import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { getBrands } from './actions/brandActions'
import { getShoes, findShoe } from './actions/shoeActions'
import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import BrandsContainer from './containers/BrandsContainer'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import SearchResults from './components/SearchResults'

class App extends Component {
  
  componentDidMount = () => {
        this.props.getBrands()
        this.props.getShoes()
    }

  render() {
    // console.log(this)
    return (
      <div className="App">
        <Container >
             <NavigationBar brands={this.props.brands.brands} shoes={this.props.shoes.shoes} history={this.props.history} findShoe={this.props.findShoe}/>
              {/* <SearchBar brands={this.props.brands.brands} shoes={this.props.shoes.shoes} history={this.props.history}/> */}
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/search" component={SearchResults}/>
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
    getShoes: () => dispatch(getShoes()),
    findShoe: (query) => dispatch(findShoe(query))
})

export default connect(mapStateFromProps, mapDispatchToProps)(App)
