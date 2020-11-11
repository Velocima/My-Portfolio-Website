import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { BouncyWord } from './BouncyWord';
import '../css/nav.css';

export const Nav = (props) => {
	const pages = ['About', 'Projects', 'Contact'];

	// nav button
	const { pathname } = useLocation();
	const [navOpen, setNavOpen] = useState(true);
	const setButtonClassName = () => {
		const open = navOpen ? 'closed' : 'open';
		const hide = pathname === '/' ? 'hide' : '';
		return `button ${hide} ${open}`;
	};
	const handleButtonClick = () => {
		setNavOpen((prev) => !prev);
	};

	const [buttonHeight, setButtonHeight] = useState();
	useEffect(() => {
		setNavOpen(pathname === '/' ? true : false);
		setButtonHeight(
			pathname === '/about'
				? '-43%'
				: pathname === '/contact'
				? '44%'
				: '0'
		);
	}, [pathname]);

	return (
		<nav className={`nav ${navOpen ? '' : 'closed'}`}>
			<div
				className={setButtonClassName()}
				onClick={handleButtonClick}
				style={{ top: buttonHeight }}
			></div>
			<ul>
				{pages.map((link, pagesIndex) => {
					return (
						<Link
							key={pagesIndex}
							to={() => `/${link.toLowerCase()}`}
						>
							<li>
								<BouncyWord
									word={link}
									isLinkHovered={props.isLinkHovered}
									isLinkUnhovered={props.isLinkUnhovered}
								/>
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};
