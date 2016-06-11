var React = require("react");
var NavMenu = require("./nav_menu");

var CheckIfExists = require("../modules/check_if_exists");

var NavBar = React.createClass({
	mixins: [CheckIfExists],
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
				<NavMenu title={this.returnIf("this.props.currentUser.username", "menu")}/>
			</nav>
			);
	}

});

module.exports = NavBar;