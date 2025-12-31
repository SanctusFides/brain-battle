import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home';
import './index.css'
import NotFound from './pages/NotFound';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <NotFound />,
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
