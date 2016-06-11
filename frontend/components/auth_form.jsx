var React = require("react");
var SessionActions = require("../actions/session_actions.js");

function icon(image){
	var url = "http://res.cloudinary.com/swell/" + image;
	return (
		<img 
			className="auth-icon"
			src={url}/>
		);
}

var AuthForm = React.createClass({
	getInitialState: function(){
		return({username: "", password: "", confirm: ""})
	},
	handle: function(field){
		return function(e){
			var state = {};
			state[field] = e.target.value;
			this.setState(state);
		}.bind(this);	
	},
	confirmIcon: function(match){
		if (match){
			return icon("check_icon.svg");
		}else {
			return icon("x_icon.svg");
		}
	},
	render: function(){
		var confirm;
		var match = (this.state.password === this.state.confirm);

		if (this.props.action === "signup"){
			confirm = ( 
				<label className="auth-form-field">
				{this.confirmIcon(match)}
				<input type="password"
					className="auth-form-input" 
					placeholder="confirm password"
					value={this.state.confirm} 
					onChange={this.handle("confirm")}/>
				</label>
				 );
		}
		
		return (
			<form id="auth-form">

				<label  className="auth-form-field">
					{icon("user_icon.svg")}
					<input 
						className="auth-form-input"
						placeholder="username"
						type="text"
						value={this.state.username} 
						onChange={this.handle("username")}/>
				</label>

				<label  className="auth-form-field">
					{icon("lock_icon.svg")}
					<input 
						className="auth-form-input"
						placeholder="password"
						type="password" 
						value={this.state.password} 
						onChange={this.handle("password")}/>
				</label>

				{confirm}

				<div id="submit" onClick={this.handleSubmit}>Submit</div>
			</form>
		);
	},
	handleSubmit: function(e){
		e.preventDefault();
		SessionActions[(this.props.action)](this.state);
	}
});

module.exports = AuthForm;