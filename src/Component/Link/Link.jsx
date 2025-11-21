import React from 'react';

const Link = () => {
    return (
        <div>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>My-Bookings </NavLink></li>
            <li> <NavLink>Blogs </NavLink></li>
            <li> <NavLink>Contact Us </NavLink></li>
        </div>
    );
};

export default Link;