var React = require("react");


var NavMenuItem = React.createClass({
	preventDefault: function(e){
		e.preventDefault();
		this.props.onClick(e);
	},
	render: function(){
		return(
			<div 
				className="menu-item"
				onClick={this.handleClick}>
				{this.props.text}
			</div>
			);
	},
	handleClick: function(e){
		e.preventDefault();
		this.props.action();
	}
});

module.exports = NavMenuItem;