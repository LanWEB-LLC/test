import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Header_Web from './Header_Web';
import Web from './Web';
import Header_Gaming from './Header_Gaming';
import Gaming from './Gaming';

function App() {
	return (
		<Router>
		<div className="App">
				<Switch>
					<Route path="/Web">
						<Header_Web />
						<Web />
						<Footer />
					</Route>
					<Route path="/Gaming">
						<Header_Gaming />
						<Gaming />
						<Footer />
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
