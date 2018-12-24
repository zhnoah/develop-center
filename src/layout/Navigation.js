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
    <Navbar inverse staticTop fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/"><span className="glyphicon glyphicon-globe" /> Develop Center</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer exact to="/">
                    <NavItem eventKey={1}><span className="glyphicon glyphicon-grain" /> 软件</NavItem>
                </LinkContainer>
                <LinkContainer to="/tool">
                    <NavItem eventKey={2}><span className="glyphicon glyphicon-wrench" /> 工具</NavItem>
                </LinkContainer>
                <LinkContainer to="/stack">
                    <NavItem eventKey={3}><span className="glyphicon glyphicon-pushpin" /> 技术栈</NavItem>
                </LinkContainer>
                <LinkContainer to="/tutorial">
                    <NavItem eventKey={4}><span className="glyphicon glyphicon-education" /> 学习</NavItem>
                </LinkContainer>
                {/* <LinkContainer to="/code">
                    <NavItem eventKey={5}><span className="glyphicon glyphicon-send" /> 代码</NavItem>
                </LinkContainer> */}
            </Nav>
            {/* <Nav pullRight>
                <LinkContainer to="/about">
                    <NavItem eventKey={6}><span className="glyphicon glyphicon-user" /> 关于</NavItem>
                </LinkContainer>
            </Nav> */}
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation