var React = require("react");

var Collection = React.createClass({
	render: function(){
		var style ={
			backgroundImage: "url(http://res.cloudinary.com/swell/image/upload/v1462428381/WY8DhvF_x4z6k7.jpg)"
		};
		return (
			<section className="collection">
				<div className="collection-header">
					<h2> All signs point right </h2>
					<p> Regular footers rejoice at these right-hand point breaks. </p>
				</div>
				<div className="thumbnail-row">
					<div className="thumbnail" style={style}/>
					<div className="thumbnail" style={style}/>
					<div className="thumbnail" style={style}/>
				</div>
				
				<div className="thumbnail-row">
					<div className="thumbnail" style={style}/>
					<div className="thumbnail" style={style}/>
					<div className="thumbnail" style={style}/>
				</div>
			</section>
			);
	}
});

module.exports = Collection;