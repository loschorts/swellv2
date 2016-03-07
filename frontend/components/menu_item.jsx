var React = require("react");


var MenuItem = React.createClass({
	render: function(){
		return(
			<li><a href="{this.props.href}">{this.props.text}</a></li>
			);
	}
});

module.exports = MenuItem;