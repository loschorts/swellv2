import React from 'react';

const liked = "http://res.cloudinary.com/swell/image/upload/v1487573973/liked.svg"
const not_liked = "http://res.cloudinary.com/swell/image/upload/v1487573975/not_liked.svg"

class Favorite extends React.Component {
	constructor(props){
		super(props);
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}
	toggleFavorite(){
		const {toggleFavorite, spot} = this.props;
		toggleFavorite(spot);
	}
	isLiked(){
		const {user, spot} = this.props;
		if (user.favorites.find(fav => fav === spot.id)) {
			return liked;
		} else {
			return not_liked;
		}
	}
	render(){
		if (!this.props.user) return <p> login to favorite this spot </p>;
		return (
			<img className="favorite-icon" src={this.isLiked()} onClick={this.toggleFavorite}/>
		);
	}
}

export default Favorite;