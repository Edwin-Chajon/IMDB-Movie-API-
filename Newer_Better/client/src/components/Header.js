import React from 'react';
import './header.css';
import {ReactComponent as ReactLogo} from './logo.svg';
import SearchBar from './searchBar'


const Header = () => {
    return (
        <div className="containment">
        <div className="headerDiv">
            <ReactLogo className="headTitle"/>
        </div>
        <div className="linkDiv">
            <ul className="linkDiv">

                <li><a className="singular" href="#">Home</a></li>
                <li><a className="singular" href="#">Film</a></li>
                <li><a className="singular" href="#">Television</a></li>
                <li><a className="singular" href="#">About</a></li>
                <li><a className="singular" href="#">Search</a></li>
            </ul>
        </div>
        </div>
    )
};

export default Header
