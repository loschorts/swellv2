var React = require("react");

var Collection = React.createClass({
	render: function(){
		var style ={
			backgroundImage: "url(http://res.cloudinary.com/swell/image/upload/v1462428381/WY8DhvF_x4z6k7.jpg)"
		};
		return (
			<section className="collection">
				<div className="collection-header">
					<h2> All signs point right. </h2>
					<p> Regular footers rejoice at these right-hand point breaks. </p>
				</div>
				<div className="thumbnail-row">
					<div className="thumbnail double" style={style}>
						<h3>Pleasure Point</h3>
					</div>
					<div className="thumbnail" style={style}>
						<h3>The Hook</h3>
					</div>
					<div className="thumbnail" style={style}>
						<h3>Four Mile</h3>
					</div>
				</div>
				
				<div className="thumbnail-row">
					<div className="thumbnail" style={style}>
						<h3>Steamer Lane</h3>
					</div>
					<div className="thumbnail" style={style}>
						<h3>Rockaway</h3>
					</div>
					<div className="thumbnail double" style={style}>
						<h3>Capitola</h3>
					</div>

				</div>
			</section>
			);
	}
});

module.exports = Collection;