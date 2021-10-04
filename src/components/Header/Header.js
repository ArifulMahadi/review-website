import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Stack direction="horizontal" gap={3}>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/achivement">Achivement</Nav.Link>
    </Nav>
</Stack>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;