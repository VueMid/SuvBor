import App from '../App'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import NotFoundSection from '../ui/NotFoundSection'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundSection />,
    }
])