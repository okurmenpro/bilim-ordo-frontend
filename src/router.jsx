import { createBrowserRouter } from "react-router-dom";
import Basket from "./pages/Basket";
import Layout from "./components/Layout/Layout";
import Course from "./pages/Course";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import TeachersCourses from "./components/TeachersCourses";
import Loginn from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";
import Checkout from "./components/Checkout";
import Categoriespage from "./pages/Categoriespage";
import OrderPage from "./pages/Order";
import Mentor from "./pages/Mentor";
import ProfileLayout from "./components/ProfileLayout";
import ProfileMycourse from "./components/ProfileMycourse";
import Reviews from "./components/Reviews";
import ProfileTeachers from "./components/ProfileTeachers";
import UploadingPhoto from "./components/Uploadingphoto";
import OrderComplete from "./pages/OrderComplete";
import MessagePage from "./components/Message";

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
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "/profile/mycourse",
            element: <ProfileMycourse />,

          },
          {
            path: "/profile/reviews",
            element: <Reviews />,
          },
          {
            path: "/profile/",
            element: <UploadingPhoto />,
          },
          {
            path: "/profile/teachers",
            element: <ProfileTeachers />,
          },
          {
            path: "/profile/orderComplete",
            element: <OrderComplete />,
          },
          {
            path: "/profile/message",
            element: <MessagePage />
          }
        ],
      },

    ],
  },
]);
