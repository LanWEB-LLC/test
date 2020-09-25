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
			<div className="footer_row">
				<Link className="footer_btn">Work Samples</Link>
			</div>
			<div className="footer_row">
				<div className="footer_logo">LW</div>
			</div>
			<div className="footer_row">© 2020 LanWEB LLC • All Rights Reserved</div>
		</div>
	);
}

export default Footer;
