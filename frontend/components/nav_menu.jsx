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
			return <div className="menu-list"> {items} </div>;
		}
	},
	render: function(){

		return(
			<div className="menu">
				<div className="menu-button" onClick={this.toggleMenu}>{this.props.title}</div>
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