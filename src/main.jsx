import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/hero.jsx'
import Textgen from './components/textgen.jsx'
import Feature from './components/features.jsx'
import About from './components/about.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "textgen",
        element: <Textgen />
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
