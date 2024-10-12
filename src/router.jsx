import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";  
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import Course from './pages/Course';
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import TeacherProfile from "./components/TeacherProfile";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/basket",  
        element: <Basket />,  
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
        element: <HomePage />
      },
      {

         path: "/course",
         element: < Course />
      },
      {
        path: "/sidebar",
        element: <Sidebar />
      },
      {
        path: "/teacherprofile",
        element: <TeacherProfile />
      },
    ]
  }
]);
