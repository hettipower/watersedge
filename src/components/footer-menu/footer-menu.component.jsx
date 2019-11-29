import React from 'react';
import { Link } from 'react-router-dom';

import './footer-menu.styles.scss';

const FooterMenu = () => (
    <div className="footerMenuWrap">
        <ul className="menu navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/my-wedding" className="nav-link">My Wedding</Link>
            </li>
            <li className="nav-item">
                <Link to="/dining" className="nav-link">Dining</Link>
            </li>
            <li className="nav-item">
                <Link to="/venues" className="nav-link">Venues</Link>
            </li>
            <li className="nav-item">
                <Link to="/events" className="nav-link">Events & Promotions</Link>
            </li>
            <li className="nav-item">
                <Link to="/terms-n-conditions" className="nav-link">Terms & Conditions</Link>
            </li>
            <li className="nav-item">
                <Link to="/faq" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
                <Link to="/csr" className="nav-link">CSR</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
    </div>
);

export default FooterMenu;