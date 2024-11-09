import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Layout from "./components/Layout/Layout";
import Course from "./pages/Course";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import TeacherProfile from "./components/TeacherProfile";
import SignUp from "./components/SignUp";

import Check from "./pages/Check";
import Loginn from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";

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
        path: "/login",
        element: <Loginn />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/sidebar",
        element: <Sidebar />,
      },
      {
        path: "/teacherprofile",
        element: <TeacherProfile />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout",
        element: <Check />,
      },
      {
        path: "/teacherpage",
        element: <TeacherPage />,
      },
    ],
  },
]);
