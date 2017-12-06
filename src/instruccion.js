import React, { Component } from 'react';
import './App.css';
import './form.css';
import './home.css';
import { Form, FormGroup, InputGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio, Nav, Navbar, NavItem } from 'react-bootstrap';
import {
	NavLink
} from 'react-router-dom'
import Provincias from './provincias.js';

class Instructions extends Component{
    render(){
        return(
            <Grid>
                <h2>Instrucciones</h2>
                <p><strong>Paso 1:</strong>Escoge si la edad actual del niño es mayor o menor a 6 meses.</p>
                <p><strong>Paso 2:</strong>Llena todas las preguntas del formulario con los datos del niño.</p>
                <p><strong>Paso 3:</strong>Listo! Usted obtendrá la dosificación de Hierro así como la presencia o no de anemia en el niño.</p>

                <Button>Empezar</Button>            
            </Grid>
        )
    }
}