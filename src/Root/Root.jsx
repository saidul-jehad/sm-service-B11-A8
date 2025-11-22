import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='w-full bg-[#EFEFEF]'>
            <Toaster
                position="top-right"
            />
            <div className='max-w-7xl mx-auto '>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;