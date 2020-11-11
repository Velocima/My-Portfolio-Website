import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BouncyWord } from './BouncyWord';
import '../css/name.css';

export const Name = (props) => {
	const pathname = useLocation().pathname;

	const isPathnameHome = () => {
		return pathname === '/' ? true : false;
	};

	return (
		<NavLink
			id={isPathnameHome() ? '' : 'top'}
			className='name'
			to='/'
			isActive={isPathnameHome}
		>
			<BouncyWord
				disabled={isPathnameHome() ? true : false}
				word='Max Hartley'
				isLinkHovered={props.isLinkHovered}
				isLinkUnhovered={props.isLinkUnhovered}
			/>
		</NavLink>
	);
};
