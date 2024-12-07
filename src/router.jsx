import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Layout from "./components/Layout/Layout";
import Course from "./pages/Course";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import TeacherProfile from "./components/TeacherProfile";
import SignUp from "./components/SignUp";
import TeachersCourses from "./components/TeachersCourses";
import Loginn from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";

import Checkout from "./components/Checkout";

import Categoriespage from "./pages/Categoriespage";
import OrderPage from "./pages/Order";


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
        path: "/mycourses",
        element: <TeachersCourses />,
      },
      {
        path: "/teacherpage",
        element: <TeacherPage />,
      },
      {

        path: "/checkout",
        element: <Checkout />,
      },

        path: "/categoriespage",
        element: <Categoriespage />,
      },
      {
        path: "/order",
        element: <OrderPage />
      }

    ],
  },
]);
