import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import logo from './img/logo.png';
import {
	NavLink
} from 'react-router-dom'

class HeaderApp extends Component {
	render() {
		return (
			<Navbar className="menu">
				<Navbar.Header >
					<Navbar.Brand className="brand">
						<img className="img-responsive" src={logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem className="btnMapa" eventKey={1}><NavLink to="/home">¿Como Funciona?</NavLink></NavItem>
						<NavItem className="btnMapa" eventKey={2} href="#">Ver Mapa</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default HeaderApp;