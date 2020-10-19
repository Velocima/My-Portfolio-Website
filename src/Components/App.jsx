import React, { useState, useEffect } from 'react';
import '../css/app.css';

export default function App() {
	const [ cursorX, setCursorX ] = useState(-10);
	const [ cursorY, setCursorY ] = useState(-10);
	const [ colorMode, setColorMode ] = useState(true);

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
		transform: `translateY(${cursorY-10}px) translateX(${cursorX-10}px)`,
		color: '#f9f7f7',
	}

	const handleColorModeClick = ({ target }) => {
		setColorMode(prev => !prev);
	}

	const darkFilterStyle = {
        height: colorMode ? "0" : "250vw",
		width: colorMode ? "0" : "250vw",
	}
	
	return (
		<div className="app">
			<div className='cursor' style={cursorStyle}></div>
			<div className='dark-filter' style={darkFilterStyle}></div>
			<div className="color-mode" onClick={handleColorModeClick}></div>
			<h1>MAX HARTLEY</h1>
		</div>
	)
}

