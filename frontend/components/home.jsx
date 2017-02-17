import React from "react" ; 

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
					<Spotlight/>
					<Collection/>
				</main>
			</div>
		);
	}
}

export default Home;