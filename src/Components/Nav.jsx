import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/nav.css'

export const Nav = (props) => {
    const pages = ['About', 'Projects', 'Contact'];
    const handleMouseOver = () => {
        props.isLinkHovered();
    }
    const handleMouseLeave = () => {
        props.isLinkUnhovered();
    }

    return (<Router>
        <nav className="nav">
            <ul>
                {pages.map(link => {
                    return <li onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}><Link to={() => `/${link.toLowerCase()}`}>{link}</Link></li>
                })}
            </ul>
        </nav>
    </Router>)
}