import React from 'react';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';

import { login, signup, receiveAuthErrors } from '../actions/session'

class AuthForm extends React.Component {

	constructor() {
		super();
		this.state = {username: "", password: "", confirm: ""};
		autoBind(this);
	}

	handleChange(field){
		return e => this.setState({[field]: e.target.value });
	}

	confirmIcon(){
		const {password, confirm} = this.state;
		return (password === confirm) ? icon("check_icon.svg") : icon("x_icon.svg");
	}

	fieldFor(field, icon, type){
		return (
				<label className="auth-form-field">
				{icon}
				<input type={type}
					className="auth-form-input" 
					placeholder={field}
					value={this.state[field]} 
					onChange={this.handleChange(field)}/>
				</label>			
			);
	}

	errors(){
		const { errors } = this.props;

		if (errors.length > 0) {
			return <ul id="auth-errors">
			{
				errors.map(function(error){
					return (<li key={error}>{error}</li>);
				})
			}
			</ul>
		}
	}

	render(){
		let confirm;

		if (this.props.action === "signup"){
			confirm = this.fieldFor("confirm", this.confirmIcon(), "password");
		}

		return (
			<form id="auth-form">
				{this.errors()}
				{this.fieldFor("username", icon("user_icon.svg"), "text")}
				{this.fieldFor("password", icon("lock_icon.svg"), "password")}
				{confirm}
				<input type="submit" id="submit" onClick={this.handleSubmit} value={pretty(this.props.action)}/>
			</form>
		);
	}

	handleSubmit(e){
		e.preventDefault();
		const { username, password, confirm } = this.state;
		const { action, signup, login, receiveAuthErrors } = this.props;

		if (action === "signup" && password !== confirm) {
			receiveAuthErrors(["passwords do not match"]);
		} else {
			this.setState({errors: []});
			(action === "signup") ? 
				signup({username, password}) 
				: login({username, password})
		}
	}
};

function icon(image){
	var url = "http://res.cloudinary.com/swell/" + image;
	return (
		<img 
			className="auth-icon"
			src={url}/>
		);
}

function pretty(action){
	switch(action){
		case "signup":
			return "Sign up!";
			break;
		case "login":
			return "Log in";
			break;
	}
}

const mapState = ({Session: {errors}}) => ({ errors });
const mapDispatch = { login, signup, receiveAuthErrors };

export default connect(mapState, mapDispatch)(AuthForm);