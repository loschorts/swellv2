import React from 'react';
import {Link} from 'react-router';
import Thumbnail from './thumbnail';
import {imageFor} from '../utils/selectors';
import {fetchSpotOverview} from '../actions/spots';
import {connect} from 'react-redux';

class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.images = {}
		props.collection.forEach(spot => {
			this.images[spot.id] = imageFor(spot);
		})
	}
	componentWillReceiveProps(newProps) {
		newProps.collection.forEach(spot => {
			if (!this.images[spot.id]) this.images[spot.id] = imageFor(spot);
		});
	}
	thumbnails(){
		const {fetchSpotOverview, collection} = this.props;
		return collection.map((spot, x) => {
			const onMount = (spot.overview ? null : fetchSpotOverview.bind(this, spot.id));
			return (
				<Thumbnail 
					onMount={onMount}
					spot={spot} 
					img={this.images[spot.id]} 
					key={`favorite${x}`}
					forecastColors={true} />
			);
		});
	}
	render(){
		const {title, desc, collection} = this.props;
		return (
			<section className="collection">

				<div className="collection-header">
					<h2>{title}</h2>
					<p>{desc}</p>
				</div>
				<div className="favorites">
					{this.thumbnails()}
				</div>

			</section>
		);
	}
}

const mapDispatch = {
	fetchSpotOverview
}

export default connect(null, mapDispatch)(Favorites);