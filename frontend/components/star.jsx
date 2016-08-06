var React = require('react');
var FavoriteStore = require('../stores/favorite_store');

var Star = React.createClass({
	render: function(){
		return <div>{FavoriteStore.includes(this.props.spotId) ? 'fav': 'not'}</div>;
	}
});

module.exports = Star;