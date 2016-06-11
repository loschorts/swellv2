var React = require("react");

var AuthForm = React.createClass({
	getInitialState: function(){
		return({username: "", password: "", confirm: ""})
	},
	handle: function(field){
		return function(e){
			e.preventDefault();
			var state = {};
			state[field] = e.value;
			this.setState(state);
		};	
	},
	render: function(){
		console.log(this.props.action)
		var confirm;

		if (this.props.action === "signup"){
			confirm = ( 
				<label>Confirm Password: <input type="text" 
				value={this.state.confirm} 
				onChange={this.handle("confirm")}/>
				</label>
				 );
		}
		
		return (
			<form id="auth-form" onSubmit={this.handleSubmit}>
				<label>Username: <input 
					type="text"
					value={this.state.confirm} 
					onChange={this.handle("username")}/>
				</label>
				<label>Password: <input 
					type="text" 
					value={this.state.confirm} 
					onChange={this.handle("password")}/>
				</label>
				{confirm}
			</form>
		);
	},
	handleSubmit: function(e){
		e.preventDefault();
		SessionActions[this.props.action](this.state);
	}
});

module.exports = AuthForm;