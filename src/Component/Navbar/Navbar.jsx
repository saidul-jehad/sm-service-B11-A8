import React from 'react';
import { NavLink } from 'react-router';

const link = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>My-Bookings </NavLink></li>
    <li> <NavLink>Blogs </NavLink></li>
    <li> <NavLink>Contact Us </NavLink></li>
</>
const Navbar = () => {




    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://ww   w.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                      {
                        link
                      }

                    </ul>
                </div>
                <div className='flex items-center justify-center btn btn-ghost text-3xl'>
                    <img className='h-8 w-17 mt-1' src="https://i.ibb.co.com/Nd2PvkVS/Gemini-Generated-Image-v47zfbv47zfbv47z-removebg-preview.png" alt="" />

                    <a className=" text-4xl font-bold">SERVICE </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-semibold rounded-3xl text-xl bg-blue-600 text-white">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;