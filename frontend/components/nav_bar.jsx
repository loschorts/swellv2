var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var NavBar = React.createClass({
	mixins: [CurrentUserState, CheckIfExists],
	preRender: function(){
		if (this.state.user){
			this.greeting = <a href="#">{"hi there, " + this.state.user.username}</a>;
			this.signIn = <li><a href="signin">switch accounts</a></li>
			this.signOut = <li><a href="signout">sign out</a></li>
		} else {
			this.greeting = <a href="#">hi there</a>;
			this.signIn = <li><a href="signin">log in</a></li>
			this.signOut = <li><a href="new">create an account</a></li>
		}
	},
	render: function(){
		this.preRender();
		return (
			<nav className="group">
				<a className="nav-item left nav-icon" href="#"> swell </a>
				<div className="nav-item right menu group">
					<div className="menu-header">{this.greeting}</div>
					<ul className="nav-item right menu-items group">
						{this.signIn}
						{this.signOut}
						<li><a href="guest">guest login</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = NavBar;