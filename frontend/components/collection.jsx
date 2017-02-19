import React from 'react';
import {Link} from 'react-router';
import Thumbnail from './thumbnail';

class Collection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: 9};
		this.images = props.collection.map(spot => imageFor(spot))
		this.addRows = this.addRows.bind(this);
	}
	componentDidMount(){
		this.scrollEvent = $(window).scroll( () => {
		  if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      this.addRows();
	   	}
		});
	}
	addRows(){
		const {show} = this.state;
		const {collection} = this.props;

		if (show === collection.length) return;

		if (show + 9 <= collection.length){
			this.setState({show: this.state.show + 9})
		} else {
			this.setState({show: collection.length})
		}
	}
	rows(){
		let rows = [];
		for (let x = 0; x < this.state.show; x+=3) {
			rows.push(
				<div className="thumbnail-row" key={`row${x}`}>
					<Thumbnail 
						spot={this.props.collection[x]} 
						img={this.images[x]} 
						double={x % 9 == 3}/>
					<Thumbnail 
						spot={this.props.collection[x+1]} 
						img={this.images[x+1]} 
						double={x % 9 == 6}/>
					<Thumbnail 
						spot={this.props.collection[x+2]} 
						img={this.images[x+2]} 
						double={x % 9 == 0}/>
				</div>				
			);
		}
		return rows;
	}
	render(){
		console.log(window.images = this.images, window.collection = this.props.collection)
		for (let x = 0; x < window.images.length; x++) {
			if (!window.collection[x].images.find(i => i !== window.images[x])) {
				console.log(window.collection[x].name, x)
			}
		}
		const {title, desc, collection} = this.props;
		return (
			<section className="collection">

				<div className="collection-header">
					<h2>{title}</h2>
					<p>{desc}</p>
				</div>
				
				{this.rows()}

			</section>
		);
	}
}

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const url = img => `url(http://res.cloudinary.com/swell/image/upload/c_scale,h_600/${img.path})`;

const imageFor = spot => {
	const randImg = randomFrom(spot.images);
	return randImg ? url(randImg) : console.log(`${spot.name} has no pics`);
};


export default Collection;