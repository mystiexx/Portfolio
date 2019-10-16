import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                <Navbar expand="lg" variant="dark" className="nav p-4">
                    <Navbar.Brand href="#home">Roland Enola</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#link">Gallery</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Container>

            </div>
        );
    }
}

export default Header;
