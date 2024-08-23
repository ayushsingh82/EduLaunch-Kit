import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Exchange from './components/Exchange.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import { Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<Exchange />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <RouterProvider router={router} />
  </StrictMode>,
)
