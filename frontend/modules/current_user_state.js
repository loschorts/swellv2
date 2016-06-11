var SessionStore = require("../stores/session_store");
var SessionActions = require("../actions/session_actions");

var CurrentUserState = {
	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			authErrors: SessionStore.errors()
		};
	},
	componentDidMount: function(){
		this.CurrentUserStateListener = SessionStore.addListener(this.updateUser);
	},
	componentWillUnmount: function(){
		this.CurrentUserStateListener.remove();
	},
	updateUser: function(){
		this.setState({
			currentUser: SessionStore.currentUser(),
			authErrors: SessionStore.errors()
		});
	}
};

module.exports = CurrentUserState;