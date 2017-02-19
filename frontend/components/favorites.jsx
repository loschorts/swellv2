import React from 'react';
import {Link} from 'react-router';
import Thumbnail from './thumbnail';
import {imageFor} from '../utils/selectors';

class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.images = props.collection.map(spot => imageFor(spot))

	}
	componentWillReceiveProps(newProps) {
		this.images = newProps.collection.map(spot => imageFor(spot))
	}
	thumbnails(){
		return this.props.collection.map((spot, x) => (
			<Thumbnail spot={spot} img={this.images[x]} key={`favorite${x}`} />
		));
	}
	render(){
		const {title, desc, collection} = this.props;
		return (
			<section className="collection">

				<div className="collection-header">
					<h2>{title}</h2>
					<p>{desc}</p>
				</div>
				<div className="fluid-container">
					{this.thumbnails()}
				</div>

			</section>
		);
	}
}


export default Favorites;