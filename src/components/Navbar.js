
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="link-hover " sticky="top" style={{fontSize: "1.5rem",fontWeight: "600",padding: "10px", background: "linear-gradient(135deg,rgb(66, 66, 65) 0%,rgb(246, 238, 238) 100%)"}}>
      <Container>
        <Navbar.Brand href="#home"><img src="/images/favicon-96x96.png" alt="icon" width="30"/> Foodie's Hub</Navbar.Brand>
        <Navbar.Toggle />
    
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
  
      </Container>
    </Navbar>
  );
}

export default NavBar;
