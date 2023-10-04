import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dataBase from '../Data/Data Base/DataBase';
import '../Data/CSS/styles.css'

function Header() {
    const logo = dataBase.header.logo;
    const { pathname } = useLocation();

    return (
        <nav>
            <ul className='flex justify-between px-8 py-8'>
                <li>
                    <Link to='/'>
                        <img src={logo} alt='404' />
                    </Link>
                </li>
                <div className='flex justify-center gap-4 items-center'>
                    <li>
                        <NavLink 
                            to='/' 
                            activeClassName='active' 
                            className='font-fairplay text-black/50 font-semibold px-2 hover:text-black'>
                                Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/Information' 
                            activeClassName='active' 
                            className='font-fairplay text-black/50 font-semibold px-2 hover:text-black'>
                                Information
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/Product'
                            isActive= {() => ['/Product', '/ProductDetail'].includes(pathname)} 
                            activeClassName='active' 
                            className='font-fairplay text-black/50 font-semibold px-2 hover:text-black'>
                                Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/Blog' 
                            activeClassName='active' 
                            className='font-fairplay text-black/50 font-semibold px-2 hover:text-black'>
                                Blog
                        </NavLink>
                    </li>
                </div>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Header;