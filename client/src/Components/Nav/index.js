import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    return (
        <div className="topnav">
            <Link className="link" to="/react_googlebooks">Google Books</Link>
            <Link className="link" to="/search">Search</Link>
            <Link className="link" to="/savedbooks">Saved</Link>
        </div>
    )
}

export default Nav;