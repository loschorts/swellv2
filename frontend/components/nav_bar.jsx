var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");
var NavBarForm = require("./nav_bar_form");
var MenuItem = require("./menu_item");
var browserHistory = require("react-router").browserHistory;
var UserApiUtil = require("../utils/user_api_util");
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var NavBar = React.createClass({
	mixins: [CurrentUserState, CheckIfExists, LinkedStateMixin],
	handleClick: function(e){
		var formName = e.currentTarget.pathname.slice(1);
		switch (formName) {
			case "logout":
				UserApiUtil.logout();
				break;
			case "guest": 
				UserApiUtil.guestLogin();
				break;
			default: 
				this.setState({formName: formName});
				break;
		}
	},
	preRender: function(){
		if (this.state.user){
			this.greeting = <a href="#">{"hi there, " + this.state.user.username}</a>
			this.signIn = <MenuItem href="login" text="switch accounts" onClick={this.handleClick}/>
			this.signOut = <MenuItem href="logout" text="log out" onClick={this.handleClick}/>
		} else {
			this.greeting = <a href="#">hi there</a>;
			this.signIn = <MenuItem href="login" text="login" onClick={this.handleClick}/>
			this.signOut = <MenuItem href="new" text="create account" onClick={this.handleClick}/>
		}
		if (this.state.formName){
			this.form = <NavBarForm formName={this.state.formName} action={this.state.action}/>
		}
	},
	render: function(){
		this.preRender();
		return (
			<nav className="group">
				<div className="nav-item left nav-icon"><a href="#"> swell </a></div>
				<div className="nav-item right menu group">
					<div className="menu-header">{this.greeting}</div>
					<ul className="nav-item menu-items group">
						{this.signIn}
						{this.signOut}
						<MenuItem href="guest" text="guest login" onClick={this.handleClick}/>
					</ul>
				</div>
				{this.form}
			</nav>
		);
	}
});

module.exports = NavBar;