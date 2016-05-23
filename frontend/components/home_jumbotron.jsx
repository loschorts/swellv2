var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require("../stores/session_store");
var CurrentUserState = require("../modules/current_user_state");

var SearchActions = require("../actions/search_actions");

var HomeJumbotron = React.createClass({
	getInitialState: function(){
		return {search: null};
	},
	componentDidMount: function(){
		this.refs.focus.getDOMNode().focus();
	},
	handleChange: function(e){
		e.preventDefault();
		this.setState({search: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		SearchActions.fetch(this.state.search);
	},
	render: function(){
		console.log(this.state);
		return (
			<div id="home-jumbotron" className="group">
				<div id="placeholder"/>
				<div id="header">
					<h1> 
						Surf better waves. 
					</h1>
					<h2> 
						Find forecasts for your favorite spots and know before you go.
					</h2>
				</div>
				<div id="search-container">
					<form onSubmit={this.handleSubmit}>
						<input
							id="search" 
							placeholder="Search for a spot, e.g. Mavericks"
							value={this.state.search}
							onChange={this.handleChange}
							ref="focus">
						</input>
					</form>
				</div>
			</div>
			);
	}
});

module.exports = HomeJumbotron;