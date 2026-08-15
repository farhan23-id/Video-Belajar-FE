import './styles/tailwind-input.css'
import './styles/App.css'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import router from './helpers/router';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
