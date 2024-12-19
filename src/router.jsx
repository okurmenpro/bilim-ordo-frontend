import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp";
import MyCourses from "./pages/Mycourses";
import Login from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";
import Checkout from "./pages/Checkout";
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
import Profilemessageteachers from "./components/Profile-page-teacher";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/login",
        element: <Login />,
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
        element: <MyCourses />,
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
            path: "/profile/message",
            element: <MessagePage />
          },
       
        ],
      
      },
      {
        path:"/profilemessageteachers",
        element:<Profilemessageteachers />
        }  
    ],
  },
]);
