import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop"; // Импортируем ScrollToTop

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <ScrollToTop /> {/* Добавляем компонент */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
