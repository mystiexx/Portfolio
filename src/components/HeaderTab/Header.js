import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Link } from 'react-router-dom'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState(prevState => {
            return {
                open: !this.state.open
            }
            
            });
    }
    render() {
        return (
            <div>
                <Container>
                <Navbar expand="lg" variant="dark" className="nav">
                    <Navbar.Brand href="#home"><Link to="/" className="link">Roland Enola</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"><Link to="/about" className="link">About</Link></Nav.Link>
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
