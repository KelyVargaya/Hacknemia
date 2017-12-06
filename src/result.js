import React, { Component } from 'react';
import './result.css';
import './App.css'
import {
	NavLink
} from 'react-router-dom'
import logo from './img/logo.png'
import { Grid } from 'react-bootstrap';
import HeaderApp from './Header.js';

const PrevPage = ({ model }) => {
	const reiniciar = () => {
		Object.keys(model.info).filter(a => a != 'ageType').map(a => {
			if (a === 'ageType') {
				model.info[a] = 'semanas';
			} else {
				model.info[a] = '';
			}
		})
	}
	return (
		<NavLink to="/form" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }} onClick={reiniciar}>
			<i className="material-icons">keyboard_arrow_left</i>
			<span>Return</span>
		</NavLink>
	)
}

const Diagnostic = ({ model }) => {
	return (
		<Grid className='fomulario'>
			<h1 style={{ color: 'black', marginTop: '0' }} className='text-center '>Resultado</h1>
			<div className="form">
				<div className="text-center contenido">
					<p>CANTIDAD DE HEMOGLOBINA</p>
					<div className="img-circle circle"><h2>{model.diagnost[0]}</h2></div>
					<div className="text-center tipo"><h3>{model.diagnost[1].toUpperCase()}</h3></div>
					<div className="receta text-center">
						<h3 style={{ marginTop: '0' }}>Receta Médica</h3>
						<p>{model.diagnost[2][0]}</p>
						<p>{model.diagnost[2][1]}</p>
						<p>{model.diagnost[2][2]}</p>
					</div>
				</div>
			</div>
		</Grid>
	)
}
const Result = ({ model }) => {
	/*	href='http://tabfacil.com/temporal/www.hacknemia.com/?page=mapa' */
	return (
		<div>
			<HeaderApp />
			<PrevPage model={model} />
			<Diagnostic model={model} />
		</div>
	);
}

export default Result;