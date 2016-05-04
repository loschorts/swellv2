var SessionStore = require('../stores/session_store');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			user: SessionStore.currentUser()
		};
	},
	componentDidMount: function(){
		this.CurrentUserStateListener = SessionStore.addListener(this.updateUser);
	},
	componentWillUnmount: function(){
		this.CurrentUserStateListener.remove();
	}
	updateUser: function(){
		this.setState({user: SessionStore.currentUser(), currentUser: SessionStore.currentUser()});
	}
	
};

module.exports = CurrentUserState;