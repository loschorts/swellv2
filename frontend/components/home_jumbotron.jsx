import React from "react";
import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {searchSpotName} from '../actions/search';
import { Link } from 'react-router'

const logo = "http://res.cloudinary.com/swell/image/upload/v1487576412/swell-logo.png"

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
		this.props.searchSpotName(e.target.value);
		this.setState({search: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		this.setState({showResults: true})
	}
	goTo(spotId){

	}
	render(){
		const showing = this.props.results.length > 0 ? "" : "hidden"
		return (
			<div id="home-jumbotron" className="group">
				<div id="placeholder"/>
				<div id="header">
					<img src={logo} className="invert"/>
					<h1> 
						SWELL
					</h1>
					<h2> Better forecasts. Better surf. </h2>
				</div>
				<div id="search-container">
					<form onSubmit={this.handleSubmit}>
						<input
							id="search" 
							placeholder="Search for a spot, e.g. 'mavericks'"
							value={this.state.search}
							onChange={this.handleChange}
							autoComplete="off"
							ref="focus">
						</input>
					</form>
					<div id="search-results" className={showing}>
						{
							this.props.results.map((r, i) =>{
								return (
									<p key={i}><Link to={`spots/${r.id}`}>{r.name}</Link></p>
								);
							})
						}
					</div>
				</div>
			</div>
			);
	}
}

const mapState = ({Search: {results}}) => ({results});

const mapDispatch = {searchSpotName}

export default connect(mapState, mapDispatch)(HomeJumbotron);