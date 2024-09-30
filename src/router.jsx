import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartMain from "./components/Cart/CartMain";

export const Router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/> ,
   },
   {
      path: "/",
      element: <CartMain/> ,
     },

    
  
])
