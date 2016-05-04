var SessionStore = require('../stores/session_store');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			user: SessionStore.currentUser()
		};
	},
	componentDidMount: function(){
		this.SessionStore.addListener(this.updateUser);
	},
	componentWillUnmoun: function(){

	}
	updateUser: function(){
		this.setState({user: SessionStore.currentUser(), currentUser: SessionStore.currentUser()});
	}
	
};

module.exports = CurrentUserState;