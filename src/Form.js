import React, { Component } from 'react';
import './App.css';
import './home.css';
import Result from './result.js';
import { InputAge, InputChoice, InputName, InputPlace, InputUnidad } from './Inputs';
import { Form, Grid, FormGroup, Button } from 'react-bootstrap';
import {
	NavLink
} from 'react-router-dom'
import HeaderApp from './Header.js';


class FormDiagnostic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkForm: false,
			error: false,
			dep: null
		}
	}
	render() {
		const { model } = this.props;
		const pesoA = (e) => {
			model.info.pesoAdecuado = e.target.value;
			check();
		}
		const prem = (e) => {
			model.info.prematuro = e.target.value;
			check();
		}
		const check = () => {
			this.setState({
				checkForm: model.info.name && model.info.age && model.info.pesoAdecuado && model.info.prematuro && model.info.hemoglobina && model.info.weight && model.info.altura
			});
		}
		const changeDep = (e) => {
			this.setState({
				dep: e.target.value
			})
		}
		const saveWeight = (e) => {
			model.info.weight = parseFloat(e.target.value)
			check();
		}
		const saveHb = (e) => {
			model.info.hemoglobina = parseFloat(e.target.value)
			check();
		}
		const findError = () => {
			switch (model.info.ageType) {
				case 'años':
					this.setState({
						error: model.info.age > 5
					})
					break;
				case 'meses':
					this.setState({
						error: model.info.age > 60
					})
					break;
				default:
					this.setState({
						error: !model.info.age
					})
					break;
			}
		}
		return (
			<div>
				<HeaderApp />

				<div>
					<NavLink to="/home" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
						<i className="material-icons">keyboard_arrow_left</i>
						<span>Return</span>
					</NavLink>
					<Grid className="formulario">
						<Form horizontal>
							<InputName model={model} funcion={check} />
							<InputAge model={model} check={check} error={findError} comprobar={this.state.error} />
							<InputUnidad label={'Peso'} unidad={'Kg'} funcion={saveWeight} />
							<InputUnidad label={'Hb'} unidad={'gr/dl'} funcion={saveHb} />
							<InputPlace model={model} check={check} place={this.state.dep} funcion={changeDep} />
							<InputChoice question={'¿Su peso fue adecuado al nacer?'} funcion={pesoA} group={'radioGroup1'} />
							<InputChoice question={'¿Su naciemiento fue prematuro?'} funcion={prem} group={'radioGroup2'} />

							<FormGroup>
								<div style={{ marginTop: '20px' }}>
									{this.state.checkForm && !this.state.error ?
										<NavLink className="btn btn-lg btn-block" to={"/result"}
											onClick={() => model.getInfo()}
											style={{ backgroundColor: '#df2727', color: 'white' }}
										>
											Diagnosticar
										</NavLink>
										:
										<Button type="submit" bsSize="large" disabled block>
											Diagnosticar
										</Button>
									}
								</div>
							</FormGroup>
						</Form>
					</Grid>
				</div>
			</div>
		)
	}
}

export default FormDiagnostic;