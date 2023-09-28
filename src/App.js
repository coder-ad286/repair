import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Copyright from "./Copyright";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route  index element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/service/:id" element={<Service />} />
    </Route>
  )
))

const App = () => {
  return <RouterProvider router={router}/> 
};

export default App;
