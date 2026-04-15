import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { IoTimeOutline } from 'react-icons/io5';
import { IoStatsChartOutline } from 'react-icons/io5';

const Navbar = () => {
    // অ্যাক্টিভ হলে কেমন দেখাবে তার জন্য একটি কমন স্টাইল
    const navLinkStyles = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${isActive
            ? 'bg-[#1a4335] text-white shadow-md' // Selected state (Dark Green)
            : 'text-gray-600 hover:bg-gray-100'   // Default state
        }`;

    return (
        <nav className="flex items-center justify-between px-10 py-4 bg-white border-b sticky top-0 z-50">
            {/* Logo Section */}
            <div className="text-2xl font-bold text-[#1a4335]">
                Keen<span className="text-[#2d6a4f]">Keeper</span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4 font-medium">
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
        </nav>
    );
};

export default Navbar;