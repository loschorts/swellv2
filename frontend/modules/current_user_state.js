var SessionStore = require("../stores/session_store");
var UserApiUtil = require("../utils/user_api_util");

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			user: SessionStore.currentUser()
		};
	},
	componentDidMount: function(){
		this.CurrentUserStateListener = SessionStore.addListener(this.updateUser);
		if (!this.state.user) {
			UserApiUtil.fetchCurrentUser();
		}
	},
	componentWillUnmount: function(){
		this.CurrentUserStateListener.remove();
	},
	updateUser: function(){
		this.setState({user: SessionStore.currentUser(), currentUser: SessionStore.currentUser()});
	}
	
};

module.exports = CurrentUserState;