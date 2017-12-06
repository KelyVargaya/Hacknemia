import React, { Component } from 'react';
import './portadaMovil.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, ButtonToolbar, Nav, Navbar, NavItem, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import logo from './img/logo-app.png'

class LogoApp extends Component {
    render() {
        return (
            <Grid fluid className="home">
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <img className="img-responsive" src={logo} alt="" />

                        <Button
                            className="btn text-center login-enviar">INICIAR</Button>
                        <Button className="btn text-center login-enviar">
                            INSTRUCCIONES
                     </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class Home extends Component {
    render() {
        return (<div>
            <LogoApp />
        </div>
        );
    }
}
export default LogoApp;