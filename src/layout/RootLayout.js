import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Copyright from '../Copyright'

const RootLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default RootLayout