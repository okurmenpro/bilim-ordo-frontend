import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AddCart from "./pages/AddCart";

export const Router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
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
            path: "/addcart",
            element: < AddCart />
         },


      ]
   },
])
