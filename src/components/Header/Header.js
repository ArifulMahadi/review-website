import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark" text="light" p='5'>
    <Container>
    <Stack direction="horizontal" gap={5}>
    <Nav className="me-auto p-3">
    <Link className="mx-2 text-light weight-3xl" to="/home">Home</Link>
    <Link className="mx-2 text-light weight-3xl" to="/about">About us</Link>
    <Link className="mx-2 text-light weight-3xl" to="/services">services</Link>
    <Link className="mx-2 text-light weight-3xl" to="/achivement">Achivement</Link>
    </Nav>
</Stack>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;