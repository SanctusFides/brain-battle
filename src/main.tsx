import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Home from './pages/Home';
import Signup from "./pages/user/Signup.tsx";
import NotFound from './pages/NotFound';

const router = createBrowserRouter([{
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: '/signup',
        element: <Signup />,
        errorElement: <NotFound />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
