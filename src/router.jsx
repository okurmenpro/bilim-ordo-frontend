import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage.jsx";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage";
import Development from "./pages/Development.jsx";
import FrontEnd from "./pages/FrontEnd.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/development" element={<Development />} />
          <Route path="/development/frontend" element={<FrontEnd />} />
          <Route path="/development/frontend/coursepage" element={<CoursePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
