import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<div className="footer_contact">
				<div className="footer_welcome">We are ready to help you!</div>
				<Link className="footer_contact_btn">Contact Us</Link>
			</div>
			<div className="footer_announcement">© 2020 LanWEB LLC • All Rights Reserved</div>
		</div>
	);
}

export default Footer;