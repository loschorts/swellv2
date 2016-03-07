var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NavBarForm = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState: function(){
		return {
			username: undefined,
			password: undefined
		};
	},
	render: function(){
		return (
			<div className="nav-item user-form right group">
				<form className="form">
					<input 
						className="form-input" 
						type="text" 
						placeholder="username"
						valueLink={this.linkState('username')}>
					</input>
					<input 
						className="form-input" 
						type="password" 
						placeholder="password"
						valueLink={this.linkState('password')}>
					</input>
					<input className="form-submit" type="submit"></input>
				</form>
			</div>	
			);
	}
});

module.exports = NavBarForm;