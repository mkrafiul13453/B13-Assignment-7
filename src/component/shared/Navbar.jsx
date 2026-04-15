import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiMenu, HiX } from 'react-icons/hi';
import { IoTimeOutline, IoStatsChartOutline } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkStyles = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${isActive
            ? 'bg-[#1a4335] text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-200'
        }`;

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4 md:px-10">

                <div className="text-2xl font-bold text-[#1a4335]">
                    Keen<span className="text-[#2d6a4f]">Keeper</span>
                </div>

                <div className="hidden md:flex gap-4 font-medium">
                    <NavLink to="/" className={navLinkStyles}>
                        <HiOutlineHome className="text-xl" />
                        Home
                    </NavLink>

                    <NavLink to="/timeline" className={navLinkStyles}>
                        <IoTimeOutline className="text-xl" />
                        Timeline
                    </NavLink>

                    <NavLink to="/stats" className={navLinkStyles}>
                        <IoStatsChartOutline className="text-xl" />
                        Stats
                    </NavLink>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <HiX className="text-2xl" />
                        ) : (
                            <HiMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col gap-2 px-6 pb-4 font-medium">
                    <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                        <HiOutlineHome className="text-xl" />
                        Home
                    </NavLink>

                    <NavLink to="/timeline" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                        <IoTimeOutline className="text-xl" />
                        Timeline
                    </NavLink>

                    <NavLink to="/stats" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                        <IoStatsChartOutline className="text-xl" />
                        Stats
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;