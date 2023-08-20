
import React from "react";
import {Nav, Container, NavDropdown, Navbar, Dropdown} from 'react-bootstrap';
import "../components/custom.css";

function GlobalNavBar(){
    return(
        <Navbar sticky="top" style={{backgroundColor:"#001E1A"}}>
            <Container>
                <Nav>
                    <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                    <NavDropdown title={<span className="text-title-color align-content-center">About</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Personal">Personal</NavDropdown.Item>
                        <NavDropdown.Item href="/Professional">Professional</NavDropdown.Item>
                        <NavDropdown.Divider style={{backgroundColor:"white"}}/>
                        <NavDropdown key="end" drop="end" title={<span className="text-title-color align-content-center">Contact</span>}>
                            <Dropdown.Item href="https://www.linkedin.com/in/zeeyakanjiyani/" target="_blank">LinkedIn</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/zeeyakanjiyani" target="_blank">GitHub</Dropdown.Item>
                            <Dropdown.Item >E-mail</Dropdown.Item>
                        </NavDropdown>
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