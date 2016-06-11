var React = require("react");
var SessionActions = require("../actions/session_actions.js");
var SessionStore = require("../stores/session_store.js");

var AuthForm = React.createClass({
	getInitialState: function(){
		return({username: "", password: "", confirm: "", errors: []});
	},
	componentDidMount: function(){
		this.sessionListener = SessionStore.addListener(this.update);
	},
	componentWillUnmount: function(){
		this.sessionListener.remove();
	},
	update: function(){
		var errors = SessionStore.errors();
		if (errors){
			this.setState({errors: SessionStore.errors()});
		} else {
			this.props.onSubmit();
		}
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
	fieldFor: function(field, icon, type){
		return (
				<label className="auth-form-field">
				{icon}
				<input type={type}
					className="auth-form-input" 
					placeholder={field}
					value={this.state[field]} 
					onChange={this.handle(field)}/>
				</label>			
			);
	},
	errors: function(){
		if (this.state.errors.length > 0) {
			return <ul id="auth-errors">
			{
				this.state.errors.map(function(error){
					return (<li key={error}>{error}</li>);
				})
			}
			</ul>
		}
	},	
	render: function(){
		console.log(this.state.errors);
		var confirm;
		var match = (this.state.password === this.state.confirm);

		if (this.props.action === "signup"){
			confirm = this.fieldFor("confirm", this.confirmIcon(match), "password");
		}

		return (
			<form id="auth-form">
				{this.errors()}
				{this.fieldFor("username", icon("user_icon.svg"), "text")}
				{this.fieldFor("password", icon("lock_icon.svg"), "password")}
				{confirm}
				<div id="submit" onClick={this.handleSubmit}>{pretty(this.props.action)}</div>
			</form>
		);
	},
	handleSubmit: function(e){
		e.preventDefault();
		if (this.props.action === "signup" && 
			this.state.password !== this.state.confirm) {
			this.setState({errors: ["passwords do not match"]});
			return;
		} else {
			this.setState({errors: []})
		}
		SessionActions[(this.props.action)](this.state);
	}
});

function icon(image){
	var url = "http://res.cloudinary.com/swell/" + image;
	return (
		<img 
			className="auth-icon"
			src={url}/>
		);
}

function pretty(action){
	switch(action){
		case "signup":
			return "Sign up!";
			break;
		case "login":
			return "Log in";
			break;
	}
}
module.exports = AuthForm;