import React, { useEffect } from 'react';
import { 
    NavLink,
    useLocation
} from 'react-router-dom';
import '../css/name.css'

export const Name = () => {
    const pathname = useLocation().pathname;
    
    const isPathnameHome = () => {
        return pathname === '/' ? false : true;
    }

    return <NavLink to='/'><h1 className={isPathnameHome() ? 'top' : '' } isActive={isPathnameHome}>MAX HARTLEY</h1></NavLink>
}