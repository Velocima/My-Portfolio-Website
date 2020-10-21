import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/nav.css'

export const Nav = (props) => {
    const pages = ['About', 'Projects', 'Contact'];
    const [ animated, setAnimated ] = useState([]);

    const handleMouseOver = ({ target }) => {
        props.isLinkHovered();
        setAnimated(prev => [...prev, target.parentNode.id])
    }

    const handleMouseLeave = () => {
        props.isLinkUnhovered();
    }
    
    const handleAnimationEnd = ({ target }) => {
        setAnimated(prev => prev.filter(listId => listId !== target.parentNode.id))
    }

    return (
        <nav className="nav">
            <ul>
                {pages.map((link, pagesIndex) => {
                    return (<Link key={pagesIndex} to={() => `/${link.toLowerCase()}`}>
                            <li 
                                id={link}
                                className={animated.includes(link) ? "animated" : ""}
                                onMouseEnter={handleMouseOver} 
                                onMouseLeave={handleMouseLeave} 
                                >
                                {
                                link
                                    .split('')
                                    .map((letter, spanIndex) => {
                                    return (<span 
                                                key={spanIndex} 
                                                onAnimationEnd={spanIndex === link.length -1 ? handleAnimationEnd : function() {}}
                                                >
                                                {letter}
                                            </span>)
                                })
                                }
                            </li>
                        </Link>)
                })}
            </ul>
        </nav>)
}