import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Course from './pages/Course'

export const Router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/> ,
   },
   {
      path: "course",
      element: <Course/>
   }
])
