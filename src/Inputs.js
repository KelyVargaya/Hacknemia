import { Form, FormGroup, InputGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio, Nav, Navbar, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import Provincias from './provincias.js';

export const InputName = ({ model, funcion }) => {
    return (
        <FormGroup controlId="formName">
            <Col md={2} sm={2} >
                <ControlLabel className='label'>Nombre</ControlLabel>
            </Col>
            <Col md={10} sm={10} >
                <FormControl type="text" placeholder="Nombre del infante" onChange={e => {
                    model.info.name = e.target.value
                    funcion();
                }} />
            </Col>
        </FormGroup>
    );
}

export const InputAge = ({ model, check, error, comprobar }) => {
    return (
        <FormGroup controlId="formAge" validationState={comprobar ? 'error' : null}>
            <Col md={2} sm={2} >
                <ControlLabel className='label'>Edad</ControlLabel>
            </Col>
            <Col md={5} sm={5} >
                <FormControl type='number' placeholder='Ingrese la edad del infante'
                    onChange={e => {
                        model.info.age = parseInt(e.target.value)
                        check();
                        error();
                    }} />
                {comprobar && <p className='error'>* Edad máxima: 5 años(60 meses)</p>}
            </Col>
            <Col md={5} sm={5} >
                <FormControl componentClass="select" placeholder="select"
                    disabled={!model.info.age}
                    onChange={e => {
                        model.info.ageType = e.target.value
                        error();
                    }}>
                    <option value="semanas">semanas</option>
                    <option value="meses">meses</option>
                    <option value='años'>años</option>
                </FormControl>
            </Col>
        </FormGroup>
    );
}

export const InputUnidad = ({ funcion, label, unidad }) => {
    return (
        <FormGroup controlId={'form' + label} >
            <Col sm={2} md={2} >
                <ControlLabel className='label'>{label}</ControlLabel>
            </Col>
            <Col sm={10} md={10} >
                <InputGroup>
                    <FormControl type="number" placeholder={label} onChange={funcion} />
                    <InputGroup.Addon>{unidad}</InputGroup.Addon>
                </InputGroup>
            </Col>
        </FormGroup>
    );
}
export const InputPlace = ({ model, place, funcion, check }) => {
    return (
        <FormGroup controlId="formDepartment" >
            <Col sm={2} md={2} >
                <ControlLabel className='label'>Procedencia</ControlLabel>
            </Col>
            <Col sm={5} md={5} >
                <FormControl componentClass="select" placeholder="select" onChange={funcion}>
                    <option value="">Seleccione Departamento</option>
                    {Provincias.map((a, index) => {
                        return <option key={index} value={index}>{a.departamento}</option>
                    })}

                </FormControl>
            </Col>
            <Col sm={5} md={5} >
                <FormControl componentClass="select" placeholder="select"
                    disabled={!place}
                    onChange={e => {
                        model.info.altura = parseInt(e.target.value);
                        check();
                    }}>
                    <option value="">Seleccione Provincia</option>
                    {place && Provincias[place].provincias.map((a, index) => {
                        return <option key={index} value={a.altura}>{a.provincias}</option>
                    })}
                </FormControl>
            </Col>
        </FormGroup >
    );
}

export const InputChoice = ({ question, funcion, group }) => {
    return (
        <FormGroup controlId='formWeightBorn' >
            <Col sm={6} md={6} >
                <ControlLabel>{question}</ControlLabel>
            </Col>
            <Col sm={6} md={6} >
                <Radio name={group} value='SI' inline onClick={funcion}>SI</Radio>
                <Radio name={group} value='NO' inline onClick={funcion}>NO</Radio>
            </Col>
        </FormGroup>
    );
}