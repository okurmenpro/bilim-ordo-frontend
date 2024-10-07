import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Basket from './pages/Basket';
import Register from './pages/Register';
import Login from './pages/Login';
import Development from './pages/Development';
import FrontEnd from './pages/FrontEnd';
import CoursePage from './pages/CoursePage';
import Layout from './components/Layout/Layout';




export default function AppRouter() {
  const route = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/Development' element={<Development />} />
        <Route path='/Development/frontend' element={<FrontEnd />} />
        <Route path='/Development/frontend/coursepage' element={<CoursePage />} />
        <Route index element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  ))
  return route
}
