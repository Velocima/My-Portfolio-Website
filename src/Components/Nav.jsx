import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/nav.css'

export const Nav = () => {
    return (<Router>
        <nav className="nav">
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </Router>)
}


{/*  */}