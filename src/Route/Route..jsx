import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';

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
            }
        ]
    }
])

export default router;