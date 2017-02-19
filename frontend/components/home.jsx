import React from "react" ; 
import {connect} from 'react-redux';
// components
import HomeJumbotron from "./home_jumbotron" ; 
import Navbar from "./nav_bar" ; 
import Spotlight from "./spotlight" ; 
import Collection from "./collection" ;
import Favorites from "./favorites" ;

import {getBy} from '../utils/selectors'; 

class Home extends React.Component {
	render(){
		console.log(this.props.favorites)
		return(
			<div id="home">
				<HomeJumbotron/>
				<main>
					<Favorites
						title="Favorites"
						desc="Keep an eye on the spots you like the most."
						shouldFetchOverview={true}
						paginate={false}
						collection={this.props.favorites} />
					<Collection
						title="Highlights"
						desc="Find a new spot to explore."
						paginate={true}
						shouldFetchOverview={false}
						collection={this.props.spots} />
				</main>
			</div>
		);
	}
}


const shuffle = a => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

let list;
const randomList = spots => {
	return list ? list : list = shuffle(spots);
}

const mapState = ({Session: {currentUser}, Spots}) => {
	return ({
	favorites: currentUser ? getBy(Spots, "id", currentUser.favorites): [],
	spots: randomList(Spots)})
}

export default connect(mapState)(Home);