import React, { useState } from 'react';
import '../css/darkmode.css';

export const DarkMode = () => {
	const [colorMode, setColorMode] = useState(true);

	const handleColorModeClick = ({ target }) => {
		setColorMode((prev) => !prev);
	};

	const darkFilterStyle = {
		height: colorMode ? '0' : '250vw',
		width: colorMode ? '0' : '250vw',
	};

	return (
		<div>
			<div className='dark-filter' style={darkFilterStyle}></div>
			<div className='color-mode' onClick={handleColorModeClick}></div>
		</div>
	);
};
