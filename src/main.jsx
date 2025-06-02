import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import ContactPage from './ContactPage.jsx';
import AboutUsPage from './AboutUsPage.jsx';
import TeamPage from './TeamPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='team' element={<TeamPage /> } />

      </Route>
    </Routes>
  </BrowserRouter>
)
