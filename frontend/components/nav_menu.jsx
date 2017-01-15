import React from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';


import NavMenuItem from "./nav_menu_item";
import AuthForm from "./auth_form";

import { login, logout } from '../actions/session';

class NavMenu extends React.Component {
	constructor() {
		super();
		this.state = {showing: false, formAction: undefined};

		autoBind(this);
	}

	render () {
		const { showing, formAction } = this.state;
		const { currentUser } = this.props;

		const title = currentUser ? currentUser.username : "menu";

		let dropDown;

		if (showing) dropDown = formAction ? this.form() : this.menuItems();

		return(
			<div className="menu">
				<div className="menu-button" onClick={this.toggleMenu}>
					{title}
				</div>
				{dropDown}
			</div>
			);
	}

	menuItems (){
		const { login, logout, currentUser } = this.props;

		let items;

		if (!currentUser) {
			items = [
				<NavMenuItem key="nav-1" text="Sign up" action={this.show("signup")}/>,
				<NavMenuItem key="nav-2" text="Login" action={this.show("login")}/>,
				<NavMenuItem key="nav-3" text="Guest Login" 
					action={login.bind(null, {username: "guest", password: "password"})}/>
			]
		} else {
			items = [
				<NavMenuItem key="nav-1" text="Logout" action={logout}/>
				]
		}

		return <div className="menu-drop-down"> {items} </div>;
	}

	form (){
		return (
			<div className="menu-drop-down">
				<AuthForm action={this.state.formAction} onSubmit={this.closeDropDown}/>
		 	</div>
		);
	}

	toggleMenu (){
		this.setState({showing: !this.state.showing, formAction: undefined});
	}

	show(form){
		return () => this.setState({formAction: form});
	}

	closeDropDown (){
		this.setState({showing: false});
	}

}

const mapState = ({ Session: {currentUser} }) => ({
	currentUser
});

const mapDispatch = {
	login, logout
};

export default connect(mapState, mapDispatch)(NavMenu);