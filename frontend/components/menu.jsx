var React = require("react");

var Menu = React.createClass({
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
					<div className="menu-item">Login</div>
					<div className="menu-item">Sign Up</div>
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
	}
});

module.exports = Menu;