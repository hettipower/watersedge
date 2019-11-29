import React from 'react';
import { Link } from 'react-router-dom';

import './main-menu.styles.scss';

const MainMenu = () => (
    <nav className="navbar navbar-expand-md mainMenuWrap">
        <ul className="menu navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/my-wedding" className="nav-link">My Wedding</Link>
            </li>
            <li className="nav-item">
                <Link to="/dining" className="nav-link">Dining</Link>
            </li>
            <li className="nav-item">
                <Link to="/venues" className="nav-link">Venues</Link>
            </li>
            <li className="nav-item menu-item-has-children">
                <span className="nav-link">Promotions & Events</span>
                <ul className="sub-menu">
                    <li className="nav-item">
                        <Link to="/promotions" className="nav-link">Promotions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">Events</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to="/careers" className="nav-link">Careers</Link>
            </li>
            <li className="nav-item">
                <Link to="/recreational" className="nav-link">Recreational</Link>
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
    </nav>
);

export default MainMenu;