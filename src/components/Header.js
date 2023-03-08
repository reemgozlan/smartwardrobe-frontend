import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card, CardImg, Col } from "react-bootstrap";
import React from 'react';
import logo from "../images/homepage/logo.jpg"

function Header() {
  return (
    <Card style={{margin: '10px'}}>
    <Navbar bg="light" expand="lg">
      <Container>
        <img className="logo-homepage"src={logo}/>
        <Navbar.Brand href="#home" style={{position: 'relative', right: '80px'}}>Smart Wardrobe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/allitems">All Items</Nav.Link>
            <Nav.Link href="/alloutfits">All Outfits</Nav.Link>
            <Nav.Link href="/outfitoftheday">Outfit of the Day</Nav.Link>
            <Nav.Link href="/additem">Add new Item</Nav.Link>
            <Nav.Link href="/newoutfit">Set a new Outfit</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/casueloutfits">Casuel</NavDropdown.Item>
              <NavDropdown.Item href="/formaloutfits">
                Formal
              </NavDropdown.Item>
              <NavDropdown.Item href="/partyoutfits">Party</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/addnewitem">
                Add new Item
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Card>
  );
}

export default Header;