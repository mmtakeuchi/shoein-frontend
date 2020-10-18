import React from 'react';
import { NavLink } from "react-router-dom";
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavigationBar extends React.Component {
  
  state = {
    query: ""
  }

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  }

  handleChange = (event) => {
      this.setState({
          query: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()

      this.props.findShoe(this.state)

      this.setState({
          query: ""
      })

      this.props.history.push(`/search/result`)
  }
  render() {
      console.log(this.props)
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={this.handleRoute("/")} style={{fontFamily: 'papyrus', color: 'red', fontWeight: 'bold', fontSize: 20}}>Sheoin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={this.handleRoute("/brands")}>Brands</Nav.Link>
              <Nav.Link onClick={this.handleRoute("/shoes")}>Shoes</Nav.Link>
              <Nav.Link onClick={this.handleRoute("/shoes/new")}>Add Shoe</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.query} onChange={this.handleChange}/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
  
      <Route path="/search" render={(props) => <SearchResults {...props} history={props.history} shoe={this.state.query}/>}/>
      </div>
    );
  }
}

export default NavigationBar;

