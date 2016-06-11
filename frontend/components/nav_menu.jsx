var React = require("react");
var SessionActions = require("../actions/session_actions");
var NavMenuItem = require("./nav_menu_item");

var NavMenu = React.createClass({
	getInitialState: function(){
		return {showing: false};
	},
	toggleMenu: function(){
		this.setState({showing: !this.state.showing});
	},
	menuItems: function(){
		if (this.state.showing) {			
			return(
				<div className="menu-list">
					<NavMenuItem text="Login" action={this.login}/>
					<NavMenuItem text="Sign up" action={this.signup}/>
					<NavMenuItem text="Guest Login" action={this.guest}/>
					<NavMenuItem text="Logout" action={this.logout}/>
				</div>
				);
		}
	},
	render: function(){
		return(
			<div className="menu">
				<div className="menu-button" onClick={this.toggleMenu} >Menu</div>
				{this.menuItems()}
			</div>
			);
	},
	login: function(){
		console.log("login");
	},
	signup: function(){
		console.log("signup");
	},
	guest: function(){
		SessionActions.guest();
	},
	logout: function(){
		SessionActions.logout();
	}
});

module.exports = NavMenu;