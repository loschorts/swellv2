var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var UserApiUtil = require("../utils/user_api_util");
var Menu = require("./menu");

var NavBar = React.createClass({
	getInitialState: function(){
		return {scrolled: ""};
	},
	componentDidMount: function(){
		var self = this;
		this.scrollEvent = $(document).scroll( function(){
			if ($(window).scrollTop() !== 0) {
				self.setState({scrolled: "scrolled"});
			} else {
				self.setState({scrolled: ""});
			}
		});
	},
	componentWillUnmount: function(){
		this.scrollEvent.off();
	},
	render: function(){
		return (
			<nav id="nav-bar" className={this.state.scrolled}>
				<div id="nav-logo"><a href="/">Logo</a></div>
				<Menu/>
			</nav>
			);
	}

});

module.exports = NavBar;