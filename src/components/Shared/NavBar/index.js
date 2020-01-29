import React, { useRef } from 'react'
import Link from 'next/link'


import './index.css'

let scrollToElement;

const defaultNav = <div className="text-sm lg:flex-grow lg:mr-2 underline-links">
            <Link href={'/'}>
                <a className="block lg:inline-block mt-4 py-3 mx-3 lg:mt-0 text-indigo-900 lg:relative hover:text-white">Home</a>
            </Link>
            <a onClick={ () => scrollToElement('js-about-us')} className="block lg:inline-block mt-4 py-3 mx-3 lg:mt-0 text-indigo-900 lg:relative hover:text-white">About Us</a>
            <a onClick={() => scrollToElement('js-why-us')} className="block lg:inline-block mt-4 py-3 mx-3 lg:mt-0 text-indigo-900 lg:relative hover:text-white">Why Us</a>
        </div>;

const NavBar = ({ children }) => {
    const toggleNavBar = useRef();

    scrollToElement = id => {
        toggleNavBar.current.checked = false;
    };

    return (
        <nav className="flex items-center justify-between bg-teal-400 flex-wrap p-4 lg:px-24 fixed w-full z-10 lg:h-20">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href='/'>
                    <a>
                        <img className="w-16 lg:w-24" src={'/logo.png'} alt="Logo"/>
                    </a>
                </Link>
            </div>
            <label htmlFor="menu-toggle"
                   className="block lg:hidden pointer-cursor flex items-center px-3 py-2 border rounded text-teal-200 border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </label>
            <input type="checkbox" className="hidden" id="menu-toggle" ref={toggleNavBar} />
            <div className="w-full invisible lg:visible flex-grow lg:flex lg:text-right -m-4 lg:mr-0 lg:w-auto relative lg:static mt-4 lg:mt-0 px-4 pb-2 bg-teal-100 lg:bg-transparent lg:pr-0 lg:mt-0" id="menu">
                {
                    (children && children.length > 0) ? children : defaultNav
                }
            </div>
        </nav>
    );
};

export default NavBar;
