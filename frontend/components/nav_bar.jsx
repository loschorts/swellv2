var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");
var NavBarForm = require('./nav_bar_form');
var MenuItem = require('./menu_item');

var NavBar = React.createClass({
	mixins: [CurrentUserState, CheckIfExists],
	preRender: function(){
		if (this.state.user){
			this.greeting = <a href="#">{"hi there, " + this.state.user.username}</a>;
			this.signIn = <MenuItem href="login" text="switch accounts"/>
			this.signOut = <MenuItem href="logout" text="log out"/>
		} else {
			this.greeting = <a href="#">hi there</a>;
			this.signIn = <MenuItem href="login" text="login"/>
			this.signOut = <MenuItem href="new" text="create account"/>
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
						<MenuItem href="guest" text="guest login"/>
					</ul>
				</div>
				<NavBarForm action={this.state.action}/>

			</nav>
		);
	}
});

module.exports = NavBar;