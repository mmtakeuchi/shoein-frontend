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
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  
    state = {
      query: ""
    };
  
    handleRoute = route => () => {
      this.props.history.push({ pathname: route });
    };
  
    handleSearchInput = event => {
      this.setState({
        query: event.target.value
      });
    };
  
    handleSearchSubmit = () => {
      if (this.state.query) {
        this.props.history.push({
          pathname: "/results",
          state: {
            query: this.state.query
          }
        });
      } else {
        alert("Please enter some search text!");
      }
    };

    componentDidMount = () => {
      this.props.getBrands()
      this.props.getShoes()
  }

  render() {
    // console.log(this)
    return (
      <div className="App">
        <Container >
             {/* <NavigationBar brands={this.props.brands.brands} shoes={this.props.shoes.shoes} history={this.props.history} findShoe={this.props.findShoe}/> */}
              {/* <SearchBar brands={this.props.brands.brands} shoes={this.props.shoes.shoes} history={this.props.history}/> */}
              <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={this.handleRoute("/")} style={{fontFamily: 'papyrus', color: 'red', fontWeight: 'bold', fontSize: 20}}>Sheoin</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={this.handleRoute("/brands")}>Brands</Nav.Link>
              <Nav.Link onClick={this.handleRoute("/shoes")}>Shoes</Nav.Link>
              <Nav.Link onClick={this.handleRoute("/shoes/new")}>Add Shoe</Nav.Link>
            </Nav>
            <Form inline >
              <FormControl type="text" placeholder="Search Shoe" className="mr-sm-2" value={this.state.query} onChange={this.handleSearchInput}/>
              <Button variant="outline-success" onClick={this.handleSearchSubmit}>Search</Button>
            </Form>
          
      </Navbar>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/results" render={(props) => <SearchResults {...props} shoes={this.props.shoes.shoes} getShoes={this.props.getShoes}/>}/>
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
