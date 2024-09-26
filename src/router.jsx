import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

export const Router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/> ,
   }
])
