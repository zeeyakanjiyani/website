
import React from "react";
import {Nav, Container, NavDropdown, Navbar} from 'react-bootstrap';
import "../components/NavBar.css";

function GlobalNavBar(){
    return(
        <Navbar sticky="top" >
            <Container>
                <Nav>
                    <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                    <NavDropdown title={<span className="text-title-color align-content-center">About</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Personal">Personal</NavDropdown.Item>
                        <NavDropdown.Item href="/Professional">Professional</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={{color:"white"}} href="/Projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        // <ul>
        //      <li><a href="/">Home</a></li>
        //      <li><NavDropdown title="About" id="basic-nav-dropdown">
        //         <NavDropdown.Item href="/Personal">Personal</NavDropdown.Item>
        //         <NavDropdown.Item href="/Professional">Professional</NavDropdown.Item>
        //      </NavDropdown></li>
        //      <li><a href="/Projects">Projects</a></li>
        //      <li><a href="/Contact">Contact</a></li>
        //  </ul>
           
    )
}

export default GlobalNavBar;