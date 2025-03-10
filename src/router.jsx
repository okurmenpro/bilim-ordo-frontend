import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp";
import MyCourses from "./pages/Mycourses";
import Login from "./pages/Login";
import TeacherPage from "./pages/TeacherPage";
import Checkout from "./pages/Checkout";
import CategoriesPage from "./pages/Categoriespage";
import OrderPage from "./pages/Order";
import Mentor from "./pages/Mentor";
import ProfileLayout from "./components/ProfileLayout";
import ProfileMycourse from "./components/ProfileMycourse";
import Reviews from "./components/Reviews";
import ProfileTeachers from "./components/ProfileTeachers";
import UploadingPhoto from "./components/Uploadingphoto";
import OrderComplete from "./pages/OrderComplete";
import MessagePage from "./components/Message";
import TeachingPage from "./pages/Teaching";
import Chat from "./components/Chat";
import TeachLayout from "./components/TeachLayout";
import Coursesinstructor from "./components/Coursesinstructor";
import TeachDashboart from "./components/TeachDashboard";

export const AppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categoriespage" element={<CategoriesPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/orderComplete" element={<OrderComplete />} />
          <Route path="/profile" element={<ProfileLayout role="profile" />}>
            <Route path="mycourse" element={<ProfileMycourse />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="" element={<UploadingPhoto />} />
            <Route path="teachers" element={<ProfileTeachers />} />
            <Route path="message" element={<MessagePage />} />
            <Route path="message/chat" element={<Chat />} />
          </Route>
        </Route>
        <Route path="/instructor" element={<TeachLayout />}>
          <Route path="/instructor" element={<TeacherPage />} />
          <Route path="courses" element={<Coursesinstructor />} />
          <Route path="dashboard" element={<TeachDashboart />} />
        </Route>
      </>
    )
  );
};
