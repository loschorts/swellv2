import React from "react" ; 
import {connect} from 'react-redux';
// components
import HomeJumbotron from "./home_jumbotron" ; 
import Navbar from "./nav_bar" ; 
import Spotlight from "./spotlight" ; 
import Collection from "./collection" ; 

class Home extends React.Component {
	render(){
		return(
			<div id="home">
				<HomeJumbotron/>
				<main>
					<Collection
						title="Highlights"
						desc="Find a new spot to explore."
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

const mapState = ({Spots}) => ({spots: randomList(Spots)})

export default connect(mapState)(Home);