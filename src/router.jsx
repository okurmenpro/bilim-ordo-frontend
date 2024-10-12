import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import Course from "./pages/Course"
import Courses from "./pages/Courses";

export const Router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: < HomePage />
         },
         {
            path: "/basket",
            element: <Basket />
         },
         {
            path: "/register",
            element: <Register />
         },
         {
            path: "/login",
            element: <Login />
         },
         {
            path: "/sidebar",
            element: < Sidebar />
         },
         {
            path: "/course",
            element: <Course />
         },
         {
            path: "/courses/:frontendID",
            element: <Courses />
         }
      ]
   }
])
