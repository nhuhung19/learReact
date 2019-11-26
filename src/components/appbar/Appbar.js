/* eslint-disable jsx-a11y/anchor-is-valid */

import './appbar.css'

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


export default function Appbar(props) {
    return (
        <>
            <style type="text/css">
                {`
                    .grad-bg {
                        background-image: linear-gradient(to right, #766dff 0%, #88f3ff 100%);
                    }
                `}
            </style>
            <section className="appbar grad-bg">
                <Navbar variant="dark" expand="lg" >
                    <Navbar.Brand href="#home">MeetMe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav activeKey="/home">
                            <NavItem>
                                {/* <Nav.Link href="#home">Home</Nav.Link> */}
								<Nav.Link as={Link} to="/" >Home</Nav.Link> {/*Kết hợp React Router Link và React Bootstrap NavLink */}
                            </NavItem>
                            <NavItem>
								<Nav.Link as={Link} to="/about" >About</Nav.Link>
                            </NavItem>
                            <NavItem>
							<Nav.Link as={Link} to="/services" >Services</Nav.Link>
                            </NavItem>
                            <NavDropdown title="Pages" id="nav-pages">
                                <NavDropdown.Item as={Link} to="/portfolio" >Portfolio</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Elements</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="nav-blog">
                                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
                            </NavDropdown>
                            <NavItem>
							<Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                            </NavItem>    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <section className="appbar__jumbotron container">
                    <div className="row">
                        {props.children}
                    </div>
                </section>
            </section>
        </>
    )
}
