import React, { useState } from 'react';
import { Cursor } from './Cursor';
import { Nav } from './Nav';
import '../css/app.css';

export default function App() {
	// Dark mode filter state and functions
	const [ colorMode, setColorMode ] = useState(true);

	const handleColorModeClick = ({ target }) => {
		setColorMode(prev => !prev);
	}

	const darkFilterStyle = {
        height: colorMode ? "0" : "250vw",
		width: colorMode ? "0" : "250vw",
	}
	
	// Cursor hover state and functions


	return (
		<div className="app">
			<Cursor />
			<div className='dark-filter' style={darkFilterStyle}></div>
			<div className="color-mode" onClick={handleColorModeClick}></div>
			<h1>MAX HARTLEY</h1>
			<Nav />
		</div>
	)
}

