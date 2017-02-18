import React from 'react';
import {Link} from 'react-router';
import Thumbnail from './thumbnail';

class Collection extends React.Component {
	render(){
		const {title, desc, collection} = this.props;
		return (
			<section className="collection">

				<div className="collection-header">
					<h2>{title}</h2>
					<p>{desc}</p>
				</div>

				<div className="thumbnail-row">
					<Thumbnail spot={collection[0]} double={true}/>
					<Thumbnail spot={collection[1]}/>
					<Thumbnail spot={collection[2]}/>
				</div>

				<div className="thumbnail-row">
					<Thumbnail spot={collection[3]}/>
					<Thumbnail spot={collection[4]}/>
					<Thumbnail spot={collection[5]} double={true}/>
				</div>

			</section>
		);
	}
}


export default Collection;