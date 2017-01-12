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
		document.getElementById("search").focus();
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
		return (
			<div id="home-jumbotron" className="group">
				<div id="placeholder"/>
				<div id="header">
					<img src="assets/swell-logo.png" className="invert"/>
					<h1> 
						SWELL
					</h1>
					<h2> Better forecasts. Better surf. </h2>
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