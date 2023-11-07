import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const NavbarMenu = ({logIn, logOut, auth}) => {
    let activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold", 
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                 className="nav-link" to = "/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Home
                </NavLink>
                <NavLink
                 className="nav-link" to = "/contar" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Contador
                </NavLink>
                <NavLink
                 className="nav-link" to = "/formulario" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Formulario
                </NavLink>
                { auth && (
                <NavLink
                 className="nav-link" to = "/admin" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Admin
                </NavLink>)
                }
                <NavLink>
                    <button className="btn btn-outline-light"
                    onClick={() => auth ? logOut() : logIn()}>
                        {auth ? 'Log Out' : 'Log In'}
                    </button>
                </NavLink>
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    
  )
}

export default NavbarMenu