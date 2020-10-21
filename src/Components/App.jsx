import React, { useState } from 'react';
import { Cursor } from './Cursor';
import { DarkMode } from './DarkMode';
import { Nav } from './Nav';
import '../css/app.css';

export default function App() {
	// Cursor hover state and functions
	const [ linkHovered, setLinkHovered ] = useState(false);

	const handleMouseEnterLink = () => {
		setLinkHovered(true);
	}
	const handleMouseLeaveLink = () => {
		setLinkHovered(false);
	}

	return (
		<div className="app">
			<Cursor isLinkHovered={linkHovered}/>
			<DarkMode />
			<h1>MAX HARTLEY</h1>
			<Nav isLinkHovered={handleMouseEnterLink} isLinkUnhovered={handleMouseLeaveLink}/>
		</div>
	)
}

