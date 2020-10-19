import React, { useState } from 'react';
import { Cursor } from './Cursor';
import '../css/app.css';

export default function App() {
	const [ colorMode, setColorMode ] = useState(true);

	const handleColorModeClick = ({ target }) => {
		setColorMode(prev => !prev);
	}

	const darkFilterStyle = {
        height: colorMode ? "0" : "250vw",
		width: colorMode ? "0" : "250vw",
	}
	
	return (
		<div className="app">
			<Cursor />
			<div className='dark-filter' style={darkFilterStyle}></div>
			<div className="color-mode" onClick={handleColorModeClick}></div>
			<h1>MAX HARTLEY</h1>
		</div>
	)
}

