var UserStore = require('../stores/user_store');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: UserStore.currentUser()
		};
	},
	componentDidMount: function(){
		UserStore.addListener(this.updateUser);
	},
	updateUser: function(){
		this.setState({currentUser: UserStore.currentUser()});
	}
	
};

module.exports = CurrentUserState;