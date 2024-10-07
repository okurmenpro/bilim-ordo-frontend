import { createBrowserRouter } from "react-router-dom";
<<<<<<<<< Temporary merge branch 1
// import HomePage from "./components/HomePage";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage"; 
=========
import HomePage from "./components/HomePage";
import CoursePage from "./pages/CoursePage.jsx";
>>>>>>>>> Temporary merge branch 2

export const Router = createBrowserRouter([
   {
    path: "/",
<<<<<<<<< Temporary merge branch 1
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
      }
    ]
=========
    element: <HomePage/> ,
   },
   {
      path: "course",
      element: <CoursePage/>
>>>>>>>>> Temporary merge branch 2
   }
])
