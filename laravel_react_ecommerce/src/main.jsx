import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/contextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router}/>
      </ContextProvider>
   
  </React.StrictMode>,
)
