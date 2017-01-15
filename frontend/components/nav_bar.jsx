import React from 'react';
import NavMenu from './nav_menu';
import autoBind from 'react-autobind';


class NavBar extends React.Component {
	constructor() {
		super();
		this.state = {scrolled: ""};
		autoBind(this);
	}

	componentDidMount(){
		this.scrollEvent = $(document).scroll(() => {
			if ($(window).scrollTop() !== 0) {
				this.setState({scrolled: "scrolled"});
			} else {
				this.setState({scrolled: ""});
			}
		});
	}

	componentWillUnmount(){
		this.scrollEvent.off();
	}

	render(){
		const { scrolled } = this.state;

		return (
			<nav id="nav-bar" className={scrolled}>
				<div id="nav-logo"><a href="/">swell</a></div>
				<NavMenu/>
			</nav>
		);
	}
}

export default NavBar;