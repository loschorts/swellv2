// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// Store
import configureStore from './store/store';

// React Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from "./components/app";
// import Home from "./components/home";
// import Focus from "./components/focus";

const Root = ({ store }) => (
  <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			</Route>
		</Router>
  </Provider>
);

function fetchInitialState() {
	$.ajax({
		url: "api/session",
		success: function(currentUser) {
			$.ajax({
				url: "api/spots",
				success: function(Spots) {
					load({Session: { currentUser, errors: [] }, Spots});
				}
			})
		}
	});
}

function load(initialState) {
	$(document).ready(() => {
		window.store = configureStore(initialState);
	  const root = document.querySelector('#swell');
	  ReactDOM.render(<Root store={store}/>, root);		
	});
}

fetchInitialState();
