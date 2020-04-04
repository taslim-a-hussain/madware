import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from '../../assets/madware.png';
import './Header.scss';


const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <img src={Logo} className="logo" alt="MadWare" />
        </Link>
        <div className="options">
            <NavLink activeClassName="is-active" className="option" to="/shop">
                SHOP
            </NavLink>
            <NavLink activeClassName="is-active" className="option" to="/contact">
                CONTACT
            </NavLink>
        </div>
    </div>
);

export default Header;