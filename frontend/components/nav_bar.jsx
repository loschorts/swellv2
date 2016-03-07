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
				<div className="nav-item left nav-icon"><a href="#"> swell </a></div>
				<div className="nav-item right menu group">
					<div className="menu-header">{this.greeting}</div>
					<ul className="nav-item menu-items group">
						{this.signIn}
						{this.signOut}
						<li><a href="guest">guest login</a></li>
					</ul>
				</div>
				<div className="nav-item user-form right group">
					<form className="form">
						<input type="text" placeholder="username"></input>
						<input type="password" placeholder="password"></input>
						<input type="submit"></input>
					</form>
				</div>
			</nav>
		);
	}
});

module.exports = NavBar;