import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Layout from "./components/Layout/Layout";
import Course from "./pages/Course";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import TeachersCourses from "./components/TeachersCourses";
import Loginn from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";
import OrderComplete from "./pages/OrderComplete";
import Checkout from "./pages/Checkout"; // Make sure this is imported
import Categoriespage from "./pages/Categoriespage"; // Make sure this is imported
import Mentor from "./components/Mentor"; // Make sure this is imported
import OrderPage from "./pages/OrderComplete";
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
      {
        path: "/categoriespage",
        element: <Categoriespage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/mentor",
        element: <Mentor />,
      },
      {
        path: "/orderComplete",
        element: <OrderComplete />,
      },
    ],
  },
]);
