import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className="header">
			<Link to="/" className="without_decoration">
				<div className="header_logo">LW</div>
			</Link>
			
			<div className="header_title">
				<p className="LineOne">LanWEB Software Solution</p>
				<p className="LineTwo">Creating Impact</p>
			</div>
			
			<div className="header_list">
				<div className="header_nav">
					<Link to="/" className="header_link">
						<span>Web</span>
					</Link>

					<Link to="/" className="header_link">
						<span>Gaming</span>
					</Link>
					
					<Link to="/" className="header_link">
						<span>Contact</span>
					</Link>
				</div>
			</div>

		</nav>
	)
}

export default Header;