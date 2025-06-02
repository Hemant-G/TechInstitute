import React from 'react'
import { Outlet } from "react-router";
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import Footer from './Footer';
import TopBar from './TopBar';

function App() {
  return (
    <>
      <TopBar />
        <Navbar />
        <Outlet />
        <ContactUs />
        <Footer />
    </>
  )
}

export default App
