import React from 'react';
import autoBind from 'react-autobind'

class NavMenuItem extends React.Component {
	constructor(props){
		super(props)
		autoBind(this);
	}
	handleClick(){
		this.props.action()
		this.props.onClick();
	}
	render(){
		return (
			<div 
				className="menu-item" 
				onClick={ this.handleClick }> 
				{this.props.text} 
			</div>
		);
	}
}

export default NavMenuItem;