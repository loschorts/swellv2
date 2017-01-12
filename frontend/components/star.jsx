var React = require('react');
var SessionStore = require("../stores/session_store");
var FavoriteStore = require('../stores/favorite_store');
var FavoriteActions = require('../actions/favorite_actions');

var Star = React.createClass({
	componentDidMount: function(){
		this.listener = SessionStore.addListener(this.forceUpdate);
	},
	componentWillUnmount: function(){
		this.listener.remove();
	},
	render: function(){
		if (SessionStore.currentUser) {
			return (
				<div>
					{FavoriteStore.includes(this.props.spotId) ? 'fav': 'not'}
				</div>
			);
		} else {
			return <div/>;
		}
	},
	handleClick: function(e){
		FavoriteActions.toggle(this.props.spotId);
	}
});

module.exports = Star;