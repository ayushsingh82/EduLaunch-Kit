import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Exchange from './components/Exchange.jsx'
import Features from './components/Features.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import { Route } from "react-router-dom";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false
});

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/features" element={<Features />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
  <RainbowKitProvider>
  <Navbar />
  <RouterProvider router={router} />
  </RainbowKitProvider>
  </QueryClientProvider>
  </WagmiProvider>
  </StrictMode>,
)
