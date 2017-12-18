import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap'
import {
    Link,
} from 'react-router-dom'
import {
    LinkContainer,
} from 'react-router-bootstrap'

const Navigation = () => (
    <Navbar inverse staticTop fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Develop Center</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer exact to="/">
                    <NavItem eventKey={1}>Environment</NavItem>
                </LinkContainer>
                <LinkContainer to="/tool">
                    <NavItem eventKey={2}>Tool</NavItem>
                </LinkContainer>
                <LinkContainer to="/stack">
                    <NavItem eventKey={3}>Stack</NavItem>
                </LinkContainer>
                <LinkContainer to="/tutorial">
                    <NavItem eventKey={4}>Tutorial</NavItem>
                </LinkContainer>
                <LinkContainer to="/code">
                    <NavItem eventKey={5}>Code</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/about">
                    <NavItem eventKey={6}>About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation