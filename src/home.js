import React, { Component } from 'react';
import './home.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, ButtonToolbar,Nav, Navbar, NavItem, } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logo from './img/logo.png'
import responsive from './img/responsive.png'
import play from './img/play.png'
import paso2 from './img/2.png'
import paso1 from './img/1.png'

class HeaderApp extends Component{
	render(){
	return(
	   <Navbar className="menu">
            <Navbar.Header >
                <Navbar.Brand className="brand">
                    <img className="img-responsive" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="btnMapa" eventKey={1} href="#">¿Como Funciona?</NavItem>
                    <NavItem className="btnMapa" eventKey={2} href="#">Ver Mapa</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
	}
  }

 class Start extends Component{
    render(){
        return(
            <Grid fluid className="home">
                <Row>
                    <Col className="titulo" xs={12} md={12}><h1>Diagnóstico fácil, rápido y preciso de la anemia </h1></Col>
                </Row>
                <Row>
                    <Col lg={6} xs={8} lgOffset={3} xsOffset={2}> 
                         <NavLink to={"/form"}
                             className="btn text-center login-enviar">Iniciar</NavLink>
                    </Col>
                </Row>
            </Grid>
        );
    }
 }

class Functionality extends Component{
    render(){
        return(
            <Grid fluid className="functionality text-center">
                <Row>
                    <Col lg={12} xs={12}>
                        <p>¿CÓMO FUNCIONA?</p>
                        <h1> Acceder a Hacknemia es muy fácil.</h1>
                        <p>Puede hacerlo desde su consultorio o su movil. </p>
                        <img className="img-responsive" src={responsive} alt=""/>
                        <hr/>
                    </Col>
                    <Col lg={12} xs={12} className="play">
                        <p>En su movil o tableta, descargue Hacknemia en la tienda de aplicaciones Google Play Store.</p>
                        <img  className="img-responsive" src={play}/> 
                    </Col>
                    <Col lg={12} xs={12} className="steps">
                        <h1>Pasos a seguir</h1>
                        <p>Paso 1 : Llenar el fomulario con datos del Niño</p>
                        <img src={paso2} alt=""/><hr/><hr/>
                        <p>Paso 2 : De acuerdo a los datos ingresados te retornara el resultado y recomendaciones</p>
                        <img src={paso1} alt=""/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
class Home extends Component {
         render(){
            return (<div> 
                        <HeaderApp/>
                        <Start/>
                        <Functionality/>
                    </div>   
            );
        }
    }
export default Home;