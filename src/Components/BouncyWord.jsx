import React, { useState } from 'react';

export const BouncyWord = (props) => {
    const { isLinkHovered, isLinkUnhovered, word } = props;
    const [ animated, setAnimated ] = useState(false);
    const handleMouseOver = ({ target }) => {
        isLinkHovered();
        setAnimated(true)
    }
    const handleMouseLeave = () => {
        isLinkUnhovered();
    }
    const handleAnimationEnd = ({ target }) => {
        setAnimated(false)
    }
return (
    <p
        id={word}
        className={animated ? "animated" : ""}
        onMouseEnter={handleMouseOver} 
        onMouseLeave={handleMouseLeave} 
    >{
        word
            .split('')
            .map((letter, spanIndex) => {
                return (
                    <span 
                        key={spanIndex} 
                        onAnimationEnd={
                            spanIndex === word.length -1 ? 
                            handleAnimationEnd : 
                            function() {}
                        }
                    >
                        {letter}
                    </span>)
            })
        }
    </p>)
}
