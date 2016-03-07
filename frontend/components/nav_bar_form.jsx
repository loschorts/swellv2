var React = require("react");

var NavBarForm = React.createClass({
	render: function(){
		return (
			<div className="nav-item user-form right group">
				<form className="form">
					<input className="form-input" type="text" placeholder="hello"></input>
					<input className="form-input" type="password" placeholder="whatever"></input>
					<input className="form-submit" type="submit"></input>
				</form>
			</div>	
			);
	}
});

module.exports = NavBarForm;