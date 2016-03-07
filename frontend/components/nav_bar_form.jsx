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
	handleSubmit: function(e){
		console.log(e);
		e.preventDefault();
		switch (this.props.action) {
			case "login": 
				UserApiUtil.login(this.state);
				break;
			case "create": 
				USserApiUtil.createUser(this.state);
				break;
		}
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
					<input className="form-submit" 
						type="submit" 
						value={this.props.action} 
						onClick={this.handleSubmit}>
					</input>
				</form>
			</div>	
			);
	}
});

module.exports = NavBarForm;