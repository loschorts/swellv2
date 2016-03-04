var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var browserHistory = require("react-router").browserHistory;

var App = require('./components/app');

window.ApiUtil = require('./utils/api_util');

var routes = (
	<Router history={browserHistory}>
		<Route path="/app" component={App}/>
	</Router>
	);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(routes, document.getElementById("swell"));
});