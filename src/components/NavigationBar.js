import React from 'react';
import { NavLink } from "react-router-dom";
import SearchBar from './SearchBar'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar = (props) => {
  // console.log(props)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" style={{fontFamily: 'papyrus', color: 'red', fontWeight: 'bold', fontSize: 20}}>Sheoin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/brands">Brands</Nav.Link>
            <Nav.Link href="/shoes">Shoes</Nav.Link>
            <Nav.Link href="/shoes/new">Add Shoe</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    {/* <SearchBar brands={props.brands} shoes={props.shoes}/> */}
    </div>
  );
}

export default NavigationBar;

