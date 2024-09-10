import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeMobileMenu();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', closeMobileMenu);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', closeMobileMenu);
        };
    }, []);

    return (
        <nav
            id='top'
            className={`bg-[#090909] text-white p-4 fixed w-full top-0 z-50 transition-all ${scrollPosition > 50 ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-100'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">
                    <div className='flex justify-between'>
                        <span>&nbsp;&nbsp;Movie Dekh</span>
                    </div>

                </a>


                <div className="hidden md:flex space-x-6">
                    <a
                        href="#signin"
                        className="hover:text-gray-400 transition duration-300"
                        onClick={(e) => handleNavLinkClick(e, 'signin')}
                    >
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="hover:text-gray-400 transition duration-300"
                        onClick={(e) => handleNavLinkClick(e, 'signup')}
                    >
                        Sign Up
                    </a>
                </div>

                <button
                    id="mobile-menu-button"
                    className="md:hidden text-white focus:outline-none"
                    aria-expanded={mobileMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div id="mobile-menu" className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'} bg-[#242424] mt-2`}>
                <a
                    href="#about-section"
                    className="block py-2 px-4 text-sm hover:bg-gray-400 transition duration-300"
                    onClick={(e) => handleNavLinkClick(e, 'about-section')}
                >
                    Sign In
                </a>
                <a
                    href="#service-section"
                    className="block py-2 px-4 text-sm hover:bg-gray-400 transition duration-300"
                    onClick={(e) => handleNavLinkClick(e, 'service-section')}
                >
                    Sign Up
                </a>
            </div>
        </nav>
    );
};

export default Navbar;