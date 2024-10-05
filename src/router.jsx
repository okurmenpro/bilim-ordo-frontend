import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Emotional from "./components/Emotional intelligence/Emotional";


export const Router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/> ,
   },
   {
      path: "/emotional",
      element: <Emotional/> ,
     },
  
])
