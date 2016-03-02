var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("react-router");
var Route = Router.route;
var browserHistory = Router.broswerHistory;

var routes = (
	<Router>
		<Route path="/" component={App}/>
	</Router>
	);

ReactDOM.render(routes, document.getElementById("react"));