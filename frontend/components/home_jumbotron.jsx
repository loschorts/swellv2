import React from "react";
import autoBind from 'react-autobind';

class HomeJumbotron extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: null
		}
		autoBind(this);
	}
	componentDidMount(){
		document.getElementById("search").focus();
	}
	handleChange(e){
		e.preventDefault();
		this.setState({search: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		alert(this.state.search);
	}
	render(){
		return (
			<div id="home-jumbotron" className="group">
				<div id="placeholder"/>
				<div id="header">
					<img src="assets/swell-logo.png" className="invert"/>
					<h1> 
						SWELL
					</h1>
					<h2> Better forecasts. Better surf. </h2>
				</div>
				<div id="search-container">
					<form onSubmit={this.handleSubmit}>
						<input
							id="search" 
							placeholder="Search for a spot, e.g. Mavericks"
							value={this.state.search}
							onChange={this.handleChange}
							ref="focus">
						</input>
					</form>
				</div>
			</div>
			);
	}
}

export default HomeJumbotron;