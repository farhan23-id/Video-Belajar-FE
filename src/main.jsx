import './tailwind-input.css'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import router from './helpers/router';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
