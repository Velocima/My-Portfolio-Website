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

	useEffect(() => {
		setNavOpen(pathname === '/' ? true : false);
	}, [pathname]);
	return (
		<nav className={`nav ${navOpen ? '' : 'closed'}`}>
			<div
				className={setButtonClassName()}
				onClick={handleButtonClick}
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
