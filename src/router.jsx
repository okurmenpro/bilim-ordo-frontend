import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursePage from "./pages/CoursePage.jsx";

export const Router = createBrowserRouter([
   {
    path: "/",
    element: <HomePage/> ,
   },
   {
      path: "course",
      element: <CoursePage/>
   }
])
