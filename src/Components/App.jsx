import React, { useState, useEffect } from 'react';
import '../css/app.css';

export default function App() {
	const [ cursorX, setCursorX ] = useState(0);
	const [ cursorY, setCursorY ] = useState(0);

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
	
	return (
		<div className="app">
			<div className='cursor' style={{transform: `translateY(${cursorY}px) translateX(${cursorX}px)`}}></div>
			<h1>Max Hartley</h1>
		</div>
	)
}

