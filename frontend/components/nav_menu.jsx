var React = require("react");
var SessionActions = require("../actions/session_actions");

var NavMenuItem = require("./nav_menu_item");
var AuthForm = require("./auth_form");

var NavMenu = React.createClass({
	getInitialState: function(){
		return {showing: false, formAction: undefined};
	},
	toggleMenu: function(){
		this.setState({showing: !this.state.showing, formAction: undefined});
	},
	menuItems: function(){
		if (this.props.title === "menu") {
			var items = [
				<NavMenuItem key="nav-1" text="Sign up" action={this.signup}/>,
				<NavMenuItem key="nav-2" text="Login" action={this.login}/>,
				<NavMenuItem key="nav-3" text="Guest Login" action={this.guest}/>
			]
		} else {
			var items = [
				<NavMenuItem key="nav-1" text="Logout" action={this.logout}/>
				]
		}
		return <div className="menu-drop-down"> {items} </div>;
	},
	form: function(){
		return (
			<div className="menu-drop-down">
				<AuthForm action={this.state.formAction}/>
		 	</div>
		);
	},
	dropDown: function(){
		if (this.state.showing){
			if (this.state.formAction){
				return this.form();
			} else {
				return this.menuItems();
			}
		}
	},
	render: function(){

		return(
			<div className="menu">
				<div className="menu-button" onClick={this.toggleMenu}>{this.props.title}</div>
				{this.dropDown()}
			</div>
			);
	},
	login: function(){
		this.setState({formAction: "login"});
	},
	signup: function(){
		this.setState({formAction: "signup"});
	},
	guest: function(){
		SessionActions.guest();
	},
	logout: function(){
		SessionActions.logout();
	}
});

module.exports = NavMenu;