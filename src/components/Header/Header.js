import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from '../../assets/madware.png';
import './Header.scss';
import {auth} from '../../firebase/firebase';


const Header = ({currentUser}) => (
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
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <NavLink activeClassName="is-active" className="option" to="/signin">SIGN IN</NavLink>
            }
        </div>
    </div>
);

export default Header;