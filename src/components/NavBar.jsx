
import React from "react";
import {Nav, Container, NavDropdown, Navbar, Dropdown, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
                            <Dropdown.Item href="https://www.linkedin.com/in/zeeyakanjiyani/" target="_blank" rel="noreferrer">LinkedIn</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/zeeyakanjiyani" target="_blank" rel="noreferrer">GitHub</Dropdown.Item>
                            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id="tooltip-bottom">Click to copy</Tooltip>}>
                                <Dropdown.Item style={{onClick:navigator.clipboard.writeText("zeeyakanjiyani@gmail.com")}}>zeeyakanjiyani@gmail.com</Dropdown.Item>
                            </OverlayTrigger>
                        </NavDropdown>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>    
    )
}

export default GlobalNavBar;