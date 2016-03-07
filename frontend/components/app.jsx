var React = require("react");
var NavBar = require("./nav_bar");
var UserStore = require('../stores/user_store');
var UserApiUtil = require('../utils/user_api_util');
var CurrentUserState = require('../modules/current_user_state');

window.UserApiUtil = UserApiUtil;

var App = React.createClass({
	componentDidMount: function(){
		UserApiUtil.fetchCurrentUser();
	},
	render: function(){
		return (
			<div className="group">
				<NavBar/>
				{this.props.children}
			</div>
			);
	}
});

module.exports = App;