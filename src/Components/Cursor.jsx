import React, { useState, useEffect } from 'react';
import '../css/cursor.css'

export const Cursor = (props) => {
	const [ cursorX, setCursorX ] = useState(-10);
    const [ cursorY, setCursorY ] = useState(-10);
    
	const updateMousePosition = ({clientX, clientY}) => {
		setCursorX(clientX);
		setCursorY(clientY);
    }
    
	useEffect(()=> {
		document.addEventListener('mousemove', updateMousePosition)
		return () => {
			document.removeEventListener('mousemove', updateMousePosition)
		}
	},[cursorX, cursorY]);

    const cursorStyle = {
		transform: `translateY(${cursorY-10}px) translateX(${cursorX-10}px) ${props.isLinkHovered ? "scale(1.5)" : ""}`,
		color: '#f9f7f7',
    }
    
    return <div className='cursor' style={cursorStyle}></div>
}