var React = require("react");


var MenuItem = React.createClass({
	preventDefault: function(e){
		e.preventDefault();
		this.props.onClick(e);
	},
	render: function(){
		return(
			<li><a onClick={this.preventDefault} href={this.props.href}>{this.props.text}</a></li>
			);
	}
});

module.exports = MenuItem;