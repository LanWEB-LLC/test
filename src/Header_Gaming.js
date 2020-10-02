import React from 'react';
import './Header_Gaming.css';
import { Link } from 'react-router-dom';

function Header_Gaming() {
	return (
		<nav className="header">
			<Link to="/" className="without_decoration">
				<div className="header_logo">LW</div>
			</Link>
			
			<div className="header_title">
				<p className="LineOne">Our Gaming Solution</p>
				<p className="LineTwo">Let's Make Some Fun</p>
			</div>
			
			<div className="header_list">
				<div className="header_nav">
					<Link to="/Web" className="header_link">
						<span>Web</span>
					</Link>

					<Link to="/Gaming" className="header_link">
						<span>Gaming</span>
					</Link>
					
					<Link to="/Contact" className="header_link">
						<span>Contact</span>
					</Link>
				</div>
			</div>

		</nav>
	)
}

export default Header_Gaming;
