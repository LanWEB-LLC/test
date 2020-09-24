import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home_pageOne">
				<div className="home_pageOne_description">
					<p className="lineOne">What can we help you with?</p>
					<p className="lineTwo">We cover everything from enterprise-grade web services to completely custom game development services — with a sprinkle of social and brand management, too.</p>
				</div>
				<div className="home_row">
					<div className="home_solution">Web</div>
					<div className="home_solution">Gaming</div>
				</div>
			</div>
		</div>
	);
}

export default Home;