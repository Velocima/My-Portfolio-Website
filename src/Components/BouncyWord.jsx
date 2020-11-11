import React, { useState } from 'react';

export const BouncyWord = (props) => {
	const { isLinkHovered, isLinkUnhovered, word, disabled } = props;
	const [animated, setAnimated] = useState(false);
	const handleMouseOver = () => {
		isLinkHovered();
		setAnimated(true);
	};
	const handleMouseLeave = () => {
		isLinkUnhovered();
	};
	const handleAnimationEnd = () => {
		setAnimated(false);
	};
	return (
		<p
			className={!disabled && animated ? 'animated' : ''}
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			{word.split('').map((letter, index) => {
				if (letter === ' ') return ' ';
				return (
					<span
						key={letter.repeat(index)}
						onAnimationEnd={
							index === word.length - 1
								? handleAnimationEnd
								: function () {}
						}
					>
						{letter}
					</span>
				);
			})}
		</p>
	);
};
