import React, { useState } from 'react';
import { Cursor } from './Cursor';
import { DarkMode } from './DarkMode';
import { Nav } from './Nav';
import { Name } from './Name';
import {
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
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
		<Router>
			<div className="app">
				<Cursor isLinkHovered={linkHovered}/>
				<DarkMode />
				<Name />
				<Nav isLinkHovered={handleMouseEnterLink} isLinkUnhovered={handleMouseLeaveLink}/>
			</div>
		</Router>
	)
}

