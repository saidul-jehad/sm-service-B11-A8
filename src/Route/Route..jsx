import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';
import DoctorDetails from '../Pages/Home/Doctors/Doctor Details/DoctorDetails';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,

        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/blogs',
                Component: Blogs,
            },
            {
                path: '/doctor/:id',
                loader: () => fetch('/doctors.json'), 
                Component: DoctorDetails,
            },
        ]
    }
])

export default router;