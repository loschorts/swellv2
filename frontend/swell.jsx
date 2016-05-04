var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var browserHistory = require("react-router").browserHistory;

var App = require("./components/app");
var Dash = require("./components/dash");
var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="spot/:spotId" component={Focus}/>
	</Router>
	);

document.addEventListener("DOMContentLoaded", function(){
	var hook = document.getElementById("swell");
	if (hook){
		ReactDOM.render(routes, hook);
	}
});