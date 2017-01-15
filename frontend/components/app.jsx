import React from 'react';
import NavBar from './nav_bar';

const App = ({children}) => {
	return (
		<div id="app">
			<NavBar />
			{children}
		</div>
	);
}

export default App;