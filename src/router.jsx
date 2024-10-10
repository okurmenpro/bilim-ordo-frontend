import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./components/HomePage";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage"; 
import Course from './pages/Course';

export const Router = createBrowserRouter([
   {
    path: "/",
    element: <Layout/> ,
    children: [
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
         path: "/",
         element: < HomePage />
      },
      {
         path: "/course",
         element: < Course />
      }
    ]
   }
])
